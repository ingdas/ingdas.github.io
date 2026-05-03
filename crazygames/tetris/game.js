// ─── Setup ───────────────────────────────────────────────────────────────────
const canvas     = document.getElementById('canvas')
const ctx        = canvas.getContext('2d')
const nextCanvas = document.getElementById('next-canvas')
const nextCtx    = nextCanvas.getContext('2d')
const holdCanvas = document.getElementById('hold-canvas')
const holdCtx    = holdCanvas.getContext('2d')
const scoreEl    = document.getElementById('score')
const levelEl    = document.getElementById('level')
const linesEl    = document.getElementById('lines')
const messageEl  = document.getElementById('message')

const CELL = 20
const COLS = 10
const ROWS = 20
canvas.width  = COLS * CELL
canvas.height = ROWS * CELL

// ─── Pieces ──────────────────────────────────────────────────────────────────
const PIECES = [
  { shape: [[1,1,1,1]],         color: '#22d3ee' }, // I
  { shape: [[1,1],[1,1]],       color: '#facc15' }, // O
  { shape: [[0,1,0],[1,1,1]],   color: '#a855f7' }, // T
  { shape: [[0,1,1],[1,1,0]],   color: '#4ade80' }, // S
  { shape: [[1,1,0],[0,1,1]],   color: '#f87171' }, // Z
  { shape: [[1,0,0],[1,1,1]],   color: '#60a5fa' }, // J
  { shape: [[0,0,1],[1,1,1]],   color: '#fb923c' }, // L
]

// ─── State ───────────────────────────────────────────────────────────────────
let board, piece, nextPiece, holdType, canHold
let score, level, linesTotal, state, lastTime, dropAcc, rafId, bag

// ─── Bag randomizer ──────────────────────────────────────────────────────────
function newBag() {
  const a = [0,1,2,3,4,5,6]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function drawFromBag() {
  if (!bag.length) bag = newBag()
  return bag.shift()
}

// ─── Piece factory ───────────────────────────────────────────────────────────
function makePiece(type) {
  const t = PIECES[type]
  return {
    type,
    shape: t.shape.map(r => [...r]),
    color: t.color,
    x: Math.floor((COLS - t.shape[0].length) / 2),
    y: 0,
  }
}

// ─── Init ────────────────────────────────────────────────────────────────────
function init() {
  board      = Array.from({ length: ROWS }, () => Array(COLS).fill(null))
  bag        = newBag()
  holdType   = null
  canHold    = true
  score      = 0
  level      = 1
  linesTotal = 0
  state      = 'idle'
  scoreEl.textContent = '0'
  levelEl.textContent = '1'
  linesEl.textContent = '0'
  piece      = makePiece(drawFromBag())
  nextPiece  = makePiece(drawFromBag())
  messageEl.textContent = 'Press Space or click to start'
  if (rafId) { cancelAnimationFrame(rafId); rafId = null }
  draw()
}

// ─── Game loop ───────────────────────────────────────────────────────────────
function startGame() {
  if (state === 'playing') return
  state    = 'playing'
  lastTime = null
  dropAcc  = 0
  messageEl.textContent = ''
  rafId = requestAnimationFrame(loop)
}

function dropInterval() {
  return Math.max(50, 800 - (level - 1) * 75)
}

function loop(ts) {
  if (lastTime === null) lastTime = ts
  const dt = Math.min(ts - lastTime, 200)
  lastTime = ts
  dropAcc += dt

  while (dropAcc >= dropInterval()) {
    dropAcc -= dropInterval()
    if (!moveDown()) { lock(); break }
  }

  draw()
  if (state === 'playing') rafId = requestAnimationFrame(loop)
}

// ─── Collision ───────────────────────────────────────────────────────────────
function valid(shape, px, py) {
  for (let r = 0; r < shape.length; r++)
    for (let c = 0; c < shape[r].length; c++)
      if (shape[r][c]) {
        const nx = px + c, ny = py + r
        if (nx < 0 || nx >= COLS || ny >= ROWS) return false
        if (ny >= 0 && board[ny][nx]) return false
      }
  return true
}

// ─── Movement ────────────────────────────────────────────────────────────────
function moveLeft()  { if (valid(piece.shape, piece.x - 1, piece.y)) piece.x-- }
function moveRight() { if (valid(piece.shape, piece.x + 1, piece.y)) piece.x++ }

function moveDown() {
  if (valid(piece.shape, piece.x, piece.y + 1)) { piece.y++; return true }
  return false
}

function hardDrop() {
  let n = 0
  while (valid(piece.shape, piece.x, piece.y + 1)) { piece.y++; n++ }
  score += n * 2
  scoreEl.textContent = score
  lock()
}

function rotateCW(shape) {
  const rows = shape.length, cols = shape[0].length
  const out = Array.from({ length: cols }, () => Array(rows).fill(0))
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      out[c][rows - 1 - r] = shape[r][c]
  return out
}

function rotatePiece(dir) {
  let s = piece.shape
  const times = dir > 0 ? 1 : 3
  for (let i = 0; i < times; i++) s = rotateCW(s)
  for (const dx of [0, -1, 1, -2, 2]) {
    if (valid(s, piece.x + dx, piece.y)) {
      piece.shape = s
      piece.x += dx
      return
    }
  }
}

// ─── Hold ────────────────────────────────────────────────────────────────────
function doHold() {
  if (!canHold) return
  canHold = false
  const prev = holdType
  holdType = piece.type
  if (prev !== null) {
    piece = makePiece(prev)
  } else {
    spawn()
  }
}

// ─── Lock & line clear ───────────────────────────────────────────────────────
function spawn() {
  piece = nextPiece
  nextPiece = makePiece(drawFromBag())
  canHold = true
  if (!valid(piece.shape, piece.x, piece.y)) gameOver()
}

function lock() {
  for (let r = 0; r < piece.shape.length; r++)
    for (let c = 0; c < piece.shape[r].length; c++)
      if (piece.shape[r][c] && piece.y + r >= 0)
        board[piece.y + r][piece.x + c] = piece.color

  let cleared = 0
  for (let r = ROWS - 1; r >= 0;) {
    if (board[r].every(Boolean)) {
      board.splice(r, 1)
      board.unshift(Array(COLS).fill(null))
      cleared++
    } else {
      r--
    }
  }

  if (cleared) {
    score      += [100, 300, 500, 800][cleared - 1] * level
    linesTotal += cleared
    level       = Math.floor(linesTotal / 10) + 1
    scoreEl.textContent = score
    levelEl.textContent = level
    linesEl.textContent = linesTotal
  }

  spawn()
}

function gameOver() {
  if (rafId) { cancelAnimationFrame(rafId); rafId = null }
  state = 'dead'
  messageEl.textContent = 'Game over! Score: ' + score
  draw()
}

// ─── Ghost ───────────────────────────────────────────────────────────────────
function ghostY() {
  let gy = piece.y
  while (valid(piece.shape, piece.x, gy + 1)) gy++
  return gy
}

// ─── Drawing ─────────────────────────────────────────────────────────────────
function drawBlock(color, bx, by, alpha) {
  ctx.globalAlpha = alpha ?? 1
  ctx.fillStyle = color
  ctx.beginPath()
  ctx.roundRect(bx * CELL + 1, by * CELL + 1, CELL - 2, CELL - 2, 3)
  ctx.fill()
  ctx.fillStyle = 'rgba(255,255,255,0.12)'
  ctx.beginPath()
  ctx.roundRect(bx * CELL + 1, by * CELL + 1, CELL - 2, 4, [3, 3, 0, 0])
  ctx.fill()
  ctx.globalAlpha = 1
}

function draw() {
  ctx.fillStyle = '#111'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.strokeStyle = '#1a1a1a'
  ctx.lineWidth = 0.5
  for (let c = 0; c <= COLS; c++) {
    ctx.beginPath(); ctx.moveTo(c * CELL, 0); ctx.lineTo(c * CELL, canvas.height); ctx.stroke()
  }
  for (let r = 0; r <= ROWS; r++) {
    ctx.beginPath(); ctx.moveTo(0, r * CELL); ctx.lineTo(canvas.width, r * CELL); ctx.stroke()
  }

  for (let r = 0; r < ROWS; r++)
    for (let c = 0; c < COLS; c++)
      if (board[r][c]) drawBlock(board[r][c], c, r)

  if (piece) {
    const gy = ghostY()
    if (gy !== piece.y)
      for (let r = 0; r < piece.shape.length; r++)
        for (let c = 0; c < piece.shape[r].length; c++)
          if (piece.shape[r][c]) drawBlock(piece.color, piece.x + c, gy + r, 0.18)

    for (let r = 0; r < piece.shape.length; r++)
      for (let c = 0; c < piece.shape[r].length; c++)
        if (piece.shape[r][c]) drawBlock(piece.color, piece.x + c, piece.y + r)
  }

  if (state === 'dead') {
    ctx.fillStyle = 'rgba(0,0,0,0.55)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  drawPreview(nextCtx, nextCanvas, nextPiece.shape, nextPiece.color)
  if (holdType !== null) {
    const t = PIECES[holdType]
    drawPreview(holdCtx, holdCanvas, t.shape, t.color)
  } else {
    holdCtx.fillStyle = '#0d0d0d'
    holdCtx.fillRect(0, 0, holdCanvas.width, holdCanvas.height)
  }
}

function drawPreview(pctx, cvs, shape, color) {
  pctx.fillStyle = '#0d0d0d'
  pctx.fillRect(0, 0, cvs.width, cvs.height)
  if (!shape) return
  const MC = 16
  const ox = Math.floor((cvs.width  - shape[0].length * MC) / 2)
  const oy = Math.floor((cvs.height - shape.length    * MC) / 2)
  pctx.fillStyle = color
  for (let r = 0; r < shape.length; r++)
    for (let c = 0; c < shape[r].length; c++)
      if (shape[r][c]) {
        pctx.beginPath()
        pctx.roundRect(ox + c * MC + 1, oy + r * MC + 1, MC - 2, MC - 2, 2)
        pctx.fill()
      }
}

// ─── Keyboard ────────────────────────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault()
    if (state === 'idle' || state === 'dead') { init(); startGame(); return }
    if (state === 'playing' && e.key === ' ') hardDrop()
    return
  }
  if (state !== 'playing') return
  switch (e.key) {
    case 'ArrowLeft':  e.preventDefault(); moveLeft();  break
    case 'ArrowRight': e.preventDefault(); moveRight(); break
    case 'ArrowDown':
      e.preventDefault()
      if (moveDown()) { score += 1; scoreEl.textContent = score }
      break
    case 'ArrowUp': case 'x': rotatePiece(1);  break
    case 'z':               rotatePiece(-1); break
    case 'Shift': case 'c': case 'C': doHold(); break
  }
})

// ─── Touch (swipe to move/rotate/drop) ───────────────────────────────────────
let tx0, ty0

canvas.addEventListener('touchstart', (e) => {
  e.preventDefault()
  tx0 = e.touches[0].clientX
  ty0 = e.touches[0].clientY
}, { passive: false })

canvas.addEventListener('touchend', (e) => {
  e.preventDefault()
  if (state === 'idle' || state === 'dead') { init(); startGame(); return }
  if (state !== 'playing') return
  const dx = e.changedTouches[0].clientX - tx0
  const dy = e.changedTouches[0].clientY - ty0
  const adx = Math.abs(dx), ady = Math.abs(dy)
  if (adx < 10 && ady < 10) {
    rotatePiece(1)
  } else if (adx > ady) {
    dx > 0 ? moveRight() : moveLeft()
  } else {
    dy > 0 ? hardDrop() : rotatePiece(1)
  }
  draw()
}, { passive: false })

// ─── Buttons ─────────────────────────────────────────────────────────────────
canvas.addEventListener('click', () => {
  if (state === 'idle' || state === 'dead') { init(); startGame() }
})

document.getElementById('btn-restart').addEventListener('click', () => { init(); startGame() })

// ─── Boot ────────────────────────────────────────────────────────────────────
init()
