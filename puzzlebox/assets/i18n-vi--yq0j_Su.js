import{t as e}from"./index-DIYwYEVR.js";var t=e({default:()=>n}),n="## Điều khiển chung\n\n- **Mới** tạo một câu đố mới, còn **Chơi lại** đưa câu đố này về lúc bắt đầu; **Hoàn tác**\n  và **Làm lại** đi qua lại các nước của bạn, và cả việc chơi lại cũng hoàn tác được.\n- **Giải** hiện lời giải nếu câu đố có hỗ trợ. Việc này được tính là một bước mà bạn có\n  thể hoàn tác.\n- Trong hầu hết các câu đố, nhấp chuột phải là thao tác thứ hai — đánh dấu, cắm cờ hoặc\n  xoay theo chiều ngược lại. Nhấp chuột giữa, ở những câu đố có dùng đến, là thao tác thứ ba.\n- **Loại** chuyển giữa các kích thước và độ khó có sẵn; **Tùy chỉnh…** cho phép bạn tự đặt.\n- **Chia sẻ** hiện các mã bạn có thể gửi để người khác chơi đúng câu đố này.\n\n### Bàn phím (Keyboard)\n\n- **Ván mới**: `N` · **Hoàn tác**: `U` hoặc `Ctrl+Z` · **Làm lại**: `R` hoặc `Ctrl+Y`\n- **Giải**: `Ctrl+S` (nếu có). **Trợ giúp này**: `?`, và `Esc` để đóng. **Tạm dừng**: `Esc`.\n- Trong hầu hết các câu đố, phím mũi tên di chuyển con trỏ trên bàn chơi, `Enter` có tác\n  dụng như nhấp chuột trái vào ô đó và `Space` như nhấp chuột phải.\n- Trong các menu, phím mũi tên chuyển từ thẻ hoặc nút này sang cái tiếp theo, `Enter`\n  để chọn và `Esc` để quay lại.\n- Tay cầm chơi game cũng dùng được: phím điều hướng để di chuyển, `A` để chọn hoặc nhấp,\n  `X` là nhấp chuột phải, `B` để quay lại, `Start` để tạm dừng, `LB` và `RB` để hoàn tác\n  và làm lại, còn `Y` để lấy gợi ý.\n  Trong các câu đố cần điền số, `RT` đưa bạn tới các phím trên màn hình và quay lại.\n",ee=e({default:()=>te}),te=`## Trên màn hình cảm ứng

- **Chạm** để làm thao tác chính và **nhấn giữ** để làm thao tác thứ hai. Nếu câu đố có
  thao tác thứ ba, hãy chạm bằng **hai ngón tay**.
- Nút tròn đầu tiên trên thanh công cụ (một chấm trong hình vuông) hoán đổi hai thao tác
  này, để thao tác bạn dùng nhiều nhất chỉ cần một lần chạm; khi chúng đang được hoán đổi,
  nút hiện một lá cờ sáng lên. Khi đó nhấn giữ sẽ làm thao tác còn lại.
- **Chụm hoặc tách hai ngón** trên bàn chơi để phóng to các ô của một lưới lớn, rồi **kéo
  bằng hai ngón tay** để di chuyển quanh lưới. Chụm hai ngón lại để xem toàn bộ câu đố.
  Menu **Tạm dừng** cũng có hai nút cho hai cỡ này.
- **Tạm dừng** chứa phần còn lại của các nút điều khiển: loại câu đố, câu đố mới, chơi lại, giải,
  chia sẻ và Cài đặt âm thanh, ngôn ngữ. Đồng hồ dừng lại khi menu đang mở.
`,ne=e({default:()=>re}),re=`# Hộp đen

Một số viên bi được giấu bên trong một chiếc hộp tô màu. Bao quanh hộp là một khung gồm
các cổng laser. Hãy bắn tia laser vào hộp từ một cổng bất kỳ và xem tia đi ra ở đâu: dựa
vào kết quả, suy ra vị trí của các viên bi, đánh dấu chúng rồi cho kiểm tra đáp án.

Tia đi theo đường thẳng, trừ khi gặp một viên bi chắn đường:

- Một viên bi nằm ngay phía trước sẽ **hấp thụ** tia. Cổng hiện chữ **H** (trúng).
- Một viên bi nằm chéo phía trước sẽ **làm lệch** tia 90°, ra xa viên bi. Nếu có bi ở cả
  hai đường chéo, tia bị bật thẳng trở lại. Các lần lệch có thể nối tiếp nhau, nên một tia
  có thể đi lòng vòng trước khi ra ngoài.
- Tia quay ra đúng cổng mà nó đi vào là tia **phản xạ**, hiện chữ **R**. Tia bị lệch ngay
  trước khi vào hộp, vì có một viên bi nằm chéo cạnh chỗ vào, cũng được tính như vậy.
- Nếu không, tia sẽ ra ở một chỗ khác và hai cổng được ghi cùng một **con số** (và cùng
  màu), để bạn biết mỗi phát bắn đi vào và đi ra ở đâu.

Khi bạn đã đánh dấu đủ số bi, một nút màu xanh lá sẽ hiện ở góc trên bên trái. Nhấp vào
đó để kiểm tra. Cách xếp của bạn được tính là đúng nếu không tia laser nào phân biệt được
nó với cách xếp của máy — khi có nhiều bi, có thể có nhiều cách xếp cho kết quả giống hệt
nhau, và cách nào trong số đó cũng thắng.

Cách xếp sai sẽ kết thúc ván chơi và hiện đáp án, nên chỉ kiểm tra khi bạn đã chắc chắn:
bi bạn tìm đúng có màu đen, dấu sai bị gạch chéo màu đỏ, bi bị bỏ sót có màu đỏ, tia nào
bạn đã bắn mà cách xếp của bạn cho kết quả sai sẽ được khoanh tròn, và những tia bạn chưa
bắn nhưng có thể phân biệt hai cách xếp sẽ được bắn ngay lúc đó và ghi bằng màu đỏ. Hoàn
tác đưa bạn quay lại để thử tiếp. Giải là bỏ cuộc và đặt các viên bi thật vào.

## Điều khiển

Thanh trạng thái đếm số bi bạn đã đánh dấu và số tia laser bạn đã bắn, và sau khi kiểm tra
thì cho biết bao nhiêu bi của bạn bị sai và bao nhiêu bi bạn bỏ sót.

### Chuột và cảm ứng

- **Nhấp vào một cổng** để bắn tia laser từ đó. Nhấp vào cổng đã bắn để làm sáng cả hai
  đầu của tia đó; nhấp lần nữa, hoặc nhấp vào bất cứ chỗ nào khác, để tắt sáng.
- **Nhấp vào bên trong hộp** để đánh dấu một viên bi ở đó; nhấp lần nữa để bỏ dấu.
- **Nhấp chuột phải vào một ô** để **khóa** ô đó, tránh vô tình thay đổi; nhấp chuột phải
  lần nữa để mở khóa. Nhấp chuột phải vào một cổng sẽ khóa hoặc mở khóa cả hàng hoặc cột
  bên cạnh nó.
- **Nhấp vào nút ở góc** để kiểm tra các dấu của bạn.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ trên hộp và các cổng.
- **Enter** có tác dụng như nhấp chuột trái: bắn tia, đánh dấu, hoặc kiểm tra khi con trỏ
  nằm trên nút.
- **Space** có tác dụng như nhấp chuột phải: khóa hoặc mở khóa.

## Tham số

- **Chiều rộng** và **chiều cao** của hộp. Mỗi hàng và mỗi cột có một cổng laser ở cả hai
  đầu.
- **Số bi**: số viên bi được giấu. Nhập một con số, hoặc một khoảng như \`3-6\` để máy tự
  chọn; khi đó bạn còn phải suy ra cả số lượng bi, và nút kiểm tra sẽ hiện với bất kỳ số
  dấu nào nằm trong khoảng đó.
`,ie=e({default:()=>ae}),ae=`# Xây cầu

Các hòn đảo, mỗi đảo mang một con số, nằm rải rác trên mặt nước. Hãy nối chúng bằng cầu
sao cho:

- mỗi cây cầu chạy thẳng ngang hoặc thẳng dọc giữa hai hòn đảo;
- con số trên mỗi đảo đúng bằng số cây cầu chạm vào nó;
- hai đảo có thể được nối bằng các cầu song song, nhưng không quá hai cây (giới hạn này có
  thể thay đổi trong phần tùy chỉnh);
- không cây cầu nào cắt ngang cây cầu khác;
- từ bất kỳ đảo nào cũng có thể đi tới mọi đảo khác bằng cách đi qua các cây cầu.

Lỗi sai được tô màu đỏ: đảo có quá nhiều cầu, đảo không thể nhận đủ cầu nữa (các đảo lân
cận còn lại đã đủ, hoặc các lối duy nhất bị cầu khác hay chính dấu "không có cầu" của bạn
chặn mất), và một nhóm đảo đã hoàn chỉnh nhưng bị tách khỏi phần còn lại. Nếu không cho
phép vòng, những cây cầu tạo thành vòng cũng có màu đỏ.

## Điều khiển

**Giải** điền lời giải vào, xóa bỏ mọi cây cầu không thuộc về lời giải.

### Chuột và cảm ứng

- **Kéo** từ một hòn đảo về phía đảo lân cận để bắc cầu giữa chúng. Bạn chỉ cần kéo đủ xa
  để rõ hướng; cây cầu sẽ tự nối tới hòn đảo gần nhất theo hướng đó. Kéo lần nữa để có cây
  cầu song song thứ hai; khi đã đạt giới hạn, kéo thêm lần nữa sẽ xóa hết các cầu đó.
- **Kéo chuột phải** theo cùng cách để ghi chú bút chì một dấu "không có cầu ở đây", hoặc
  để xóa dấu đó.
- **Nhấp** vào một hòn đảo để đánh dấu là đã xong. Đảo chuyển sang màu xám và các cây cầu
  của nó bị khóa để bạn không vô tình thay đổi; nhấp lần nữa để mở khóa.
- **Xóa** (nút cục tẩy cạnh nút Hoàn tác) chuyển thao tác kéo sang gỡ bỏ: kéo từ một hòn đảo về phía đảo lân cận để gỡ mọi cây cầu giữa chúng, hoặc dấu "không có cầu" ở đó. Nhấn lại nút để quay về bắc cầu.
- **Đường dẫn** hiện các đường mờ ở mọi chỗ có thể bắc cầu, và ẩn chúng đi.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ từ đảo này sang đảo khác.
- **Enter** rồi một phím mũi tên sẽ bắc cầu theo hướng đó; **Space** rồi một phím mũi tên
  sẽ đặt dấu. Nhấn **Enter** hai lần để đánh dấu đảo đã xong.
- **E** là nút **Xóa** và **G** là nút **Đường dẫn**.

## Tham số

- **Chiều rộng** và **chiều cao** của lưới, mỗi chiều ít nhất là 3.
- **Độ khó**: câu đố _Dễ_ chỉ cần bạn xét từng hòn đảo một — khi số cầu còn thiếu vừa khít
  với chỗ còn trống, hoặc khi con số của đảo quá lớn để bỏ qua bất kỳ đảo lân cận nào. Câu
  đố _Vừa_ còn bắt bạn suy nghĩ về từng mối nối: cây cầu nào bắt buộc phải có vì thiếu nó
  thì đảo không thể hoàn thành, và (khi cấm vòng) mối nối nào sẽ khép thành vòng. Câu đố
  _Khó_ đòi hỏi bạn nhìn trước một bước: cây cầu này có khiến một nhóm đảo hoàn chỉnh mà
  bị tách khỏi phần còn lại không, hay có khiến một đảo nào đó hết đường đi không? Mỗi câu
  đố có đúng một lời giải.
- **Cho phép vòng**: bật theo mặc định. Khi tắt, mạng lưới cầu hoàn chỉnh phải là một cây
  — không có đường cầu nào dẫn trở lại chỗ xuất phát — và câu đố được tạo sao cho có thể
  giải với điều kiện đó.
- **Số cầu tối đa mỗi hướng**: giới hạn số cầu song song, thường là 2. Càng ít càng dễ.
- **% ô là đảo**: khoảng bao nhiêu phần của lưới trở thành đảo. Có những cách bố trí không
  chứa nổi chừng ấy đảo, nên đây là giới hạn trên.
- **Hệ số giãn**: khi mở rộng bản đồ, khả năng một hòn đảo mới được đặt càng xa càng tốt
  thay vì ở chỗ gần hơn. Giá trị cao cho câu đố thưa hơn, dễ hơn; giá trị thấp cho câu đố
  dày đặc.
`,oe=e({default:()=>r}),r=`# Lăn khối

Một khối đa diện nằm trên lưới, và vài ô của lưới được tô màu xanh — đúng bằng số mặt của
khối. Lăn khối là lật nó qua một cạnh của mặt đang tiếp đất, để mặt kế tiếp úp xuống ô bên
cạnh. Mỗi khi khối tiếp đất, mặt nằm dưới và ô nó vừa đáp xuống sẽ đổi màu cho nhau: đặt
một mặt trơn lên ô xanh thì màu xanh dính lên khối; đặt một mặt xanh lên ô trơn thì màu
xanh được để lại. Câu đố hoàn thành khi mọi mặt đều xanh cùng lúc. Thanh trạng thái đếm số
lần lăn của bạn, nên hãy cố hoàn thành với càng ít lần càng tốt.

Phiên bản kinh điển là lăn một khối lập phương trên lưới ô vuông. Trên lưới tam giác, bạn
có thể lăn khối tứ diện, bát diện hoặc nhị thập diện. Hãy nhớ rằng mỗi mặt của khối tứ diện
khi lăn chỉ có thể tới được một phần tư số ô, và các mặt của khối bát diện lần lượt đáp lên
tam giác hướng lên rồi tam giác hướng xuống — các ô xanh luôn được đặt sao cho câu đố có
thể hoàn thành.

## Điều khiển

Câu đố này không có nút Giải. Khi mọi mặt đã xanh, bạn vẫn có thể lăn khối đi khắp nơi mà
không làm hỏng kết quả.

### Chuột và cảm ứng

- **Nhấp** vào bất cứ đâu để lăn khối một ô theo hướng của con trỏ. Trên lưới ô vuông, đó
  là lên, xuống, trái hoặc phải; trên lưới tam giác, tam giác hiện tại có ba ô lân cận để
  chọn. Một lần nhấp tới được mọi ô lân cận của khối, nên chỉ cần thế là đủ để chơi mọi
  kiểu lưới.

### Bàn phím (Keyboard)

- **Phím mũi tên** lăn khối theo bốn hướng chính. Trên lưới tam giác, mỗi tam giác chỉ có
  ô lân cận ở phía trên hoặc phía dưới, nên phím dọc còn lại không có tác dụng.
- **Home**, **Page Up**, **End** và **Page Down** (hoặc các phím góc của bàn phím số, 7, 9,
  1 và 3) lăn chéo trên lưới tam giác, chọn cạnh nào nằm gần hướng đó nhất.

## Tham số

- **Loại khối**: tứ diện, lập phương, bát diện hoặc nhị thập diện. Khối lập phương dùng
  lưới ô vuông; các khối còn lại dùng lưới tam giác.
- **Chiều rộng / cạnh trên** và **Chiều cao / cạnh dưới**: với khối lập phương, đó là kích
  thước của lưới ô vuông. Với lưới tam giác, đó là độ dài cạnh trên và cạnh dưới của một
  sân hình lục giác (đặt một trong hai bằng 0 sẽ cho một hình tam giác đơn thuần). Lưới phải
  đủ chỗ cho mọi ô xanh cùng một ô trống để khối bắt đầu.
`,i=e({default:()=>a}),a=`# Dominosa

Một bộ domino đầy đủ — mỗi quân ứng với một cặp số từ 0 đến số lớn nhất, kể cả các quân
đôi — đã được xếp kín một hình chữ nhật. Sau đó các con số được chép lại và các quân domino
bị lấy đi. Nhiệm vụ của bạn là tìm ra chúng đã nằm ở đâu: chia lưới thành các cặp ô kề
nhau sao cho mỗi quân domino trong bộ được dùng đúng một lần.

Quân domino đặt ở chỗ mà cặp số của nó đã xuất hiện ở nơi khác sẽ có màu đỏ, và một ô trống
không còn quân domino nào phủ tới được cũng vậy.

## Điều khiển

Câu đố hoàn thành khi mọi ô đều được phủ và không có quân domino nào màu đỏ. **Giải** đặt
mọi quân domino của lời giải, xóa hết những gì bạn đã đặt.

### Chuột và cảm ứng

- **Nhấp** vào đường ranh giới giữa hai số kề nhau (hoặc vào nửa ô gần ranh giới đó nhất)
  để đặt một quân domino phủ lên chúng. Nhấp lại vào đúng ranh giới đó để lấy quân đi. Quân
  domino đặt đè lên một phần quân khác sẽ thay thế quân đó.
- **Nhấp chuột phải** vào một ranh giới để ghi chú bút chì một đường kẻ ngang qua nó, nghĩa
  là hai số này **không** thuộc cùng một quân domino. Nhấp chuột phải lần nữa để xóa đường
  kẻ. Không thể kẻ đường sát một quân domino, và đặt một quân domino sẽ xóa mọi đường kẻ
  chạm vào nó.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ quanh lưới, dừng ở tâm các ô và ở ranh giới giữa các
  ô. Khi ở trên một ranh giới, con trỏ viền quanh quân domino mà nó sẽ đặt.
- **Enter** đặt hoặc lấy quân domino đó, còn **Space** kẻ hoặc xóa một đường kẻ ở đó.

## Tham số

- **Số lớn nhất trên quân domino**: các quân domino đi từ 0-0 đến N-N, và lưới rộng (N+2)
  ô, cao (N+1) ô, nên số lớn nhất là 6 cho lưới 8×7.
- **Độ khó**: câu đố cần suy luận đến mức nào. Câu đố **Rất dễ** chỉ gồm những quân domino
  có đúng một chỗ để đặt, hoặc những ô chỉ có đúng một quân domino phủ được. **Dễ** thêm hai
  lập luận nữa: mọi cách phủ ô này đều dùng cùng một quân domino, nên quân đó không nằm ở
  chỗ nào khác; và mọi chỗ mà quân domino này có thể nằm đều loại trừ một vị trí nào đó.
  **Khó** thêm phép đếm (quân domino nào sẽ cô lập một số lẻ ô là không thể; một nhóm ô cùng
  số có thể giành lấy những quân domino mà chúng dùng chung) và câu đố **Cực khó** đòi hỏi
  bạn lần theo hệ quả của một nước đặt cho đến khi chúng mâu thuẫn nhau. Tất cả các mức này
  đều có đúng một lời giải. Câu đố **Mơ hồ** hoàn toàn không được kiểm tra: chúng có thể có
  nhiều lời giải và có thể cần đoán mò — tìm ra bất kỳ một cách xếp nào cũng thắng.
`,o=e({default:()=>s}),s=`# Mười lăm

Trò xếp số trượt kinh điển. Lưới chứa đầy các mảnh đánh số và một chỗ trống. Hãy trượt các
mảnh vào chỗ trống cho đến khi các con số được xếp theo thứ tự từ trái sang phải và từ trên
xuống dưới, với chỗ trống ở góc dưới bên phải.

## Điều khiển

**Giải** nhảy thẳng tới cách xếp hoàn chỉnh. Nó không chỉ cho bạn cách đi tới đó, nhưng rất
tiện để đặt lại khi luyện tập các chuỗi nước đi quen thuộc.

### Chuột và cảm ứng

- **Nhấp** vào bất kỳ mảnh nào cùng hàng hoặc cùng cột với chỗ trống để trượt nó (cùng mọi
  mảnh nằm giữa nó và chỗ trống) vào vị trí.

### Bàn phím (Keyboard)

- **Phím mũi tên** trượt một mảnh vào chỗ trống theo hướng mũi tên: **mũi tên lên** đẩy mảnh nằm dưới
  chỗ trống lên trên.

## Tham số

- **Chiều rộng** và **chiều cao** của lưới (mặc định là 4×4 kinh điển).
`,c=e({default:()=>l}),l=`# Lấp số

Một số ô của lưới đã có sẵn chữ số; các ô còn lại để trống. Hãy điền một chữ số vào mỗi ô
trống sao cho mỗi nhóm liền nhau gồm các chữ số giống nhau phủ đúng bằng số ô mà chữ số đó
cho biết: mỗi số 3 thuộc một nhóm ba số 3, mỗi số 1 đứng một mình, v.v. Các ô chỉ được tính
là liền nhau qua cạnh, không tính qua góc. Suy ra không ô nào chứa số 0, hai số 1 không bao
giờ nằm cạnh nhau, và không nhóm nào lớn hơn chín ô. Một chữ số cho sẵn không nhất thiết là
điểm bắt đầu của nhóm: nhiều số 4 cho sẵn có thể cùng thuộc một nhóm, và một nhóm có thể
không chứa chữ số cho sẵn nào.

Đường kẻ đậm xuất hiện giữa những ô có chữ số khác nhau, và bao quanh mọi nhóm đã đủ kích
thước (hoặc quá lớn). Một chữ số chuyển sang màu đỏ khi nhóm của nó đã lớn hơn chữ số đó,
hoặc khi nó bị vây kín không còn chỗ để đạt đủ kích thước. Đây là câu đố được Nikoli phát
hành với tên Fillomino.

## Điều khiển

Các chữ số cho sẵn được viết bằng mực và không thể thay đổi; chữ số của bạn có màu xanh.
**Giải** điền lời giải vào.

### Chuột và cảm ứng

- **Nhấp** vào một ô trống để chọn nó, rồi dùng các phím trên màn hình để điền chữ số.
  **⌫** trên bàn phím số xóa trống lại các ô đang chọn.
- **Kéo** qua nhiều ô để chọn tất cả, để một chữ số điền vào mọi ô đang chọn cùng lúc.
- **Nhấp chuột phải** để thêm một ô vào vùng chọn mà không phải chọn lại từ đầu;
  nhấp chuột phải lần nữa vào một ô đang chọn sẽ bỏ nó ra khỏi vùng chọn.
- **Điền** (nút cạnh nút Hoàn tác) dùng để lan một chữ số: kéo từ một ô có chữ số qua các ô xung quanh, và khi thả tay tất cả đều nhận chữ số đó, không cần bàn phím số. Nhấp và kéo bắt đầu từ ô trống vẫn là chọn ô như cũ. Nhấn lại nút để quay về chọn ô.

### Bàn phím (Keyboard)

- Khi đã chọn một hoặc nhiều ô, **gõ một chữ số** để điền nó vào tất cả các ô đó. Chữ số
  \`0\`, hoặc **Backspace**, xóa trống chúng lại.
- **Phím mũi tên** di chuyển con trỏ bàn phím, và chữ số bạn gõ sẽ điền vào ô dưới con trỏ.
- **Space** hoặc **Enter** thêm hoặc bỏ ô dưới con trỏ khỏi vùng chọn, để có thể điền nhiều
  ô chỉ với một lần nhấn phím.
- **F** là nút **Điền**.

## Tham số

- **Chiều rộng** và **Chiều cao**: kích thước của lưới. Nhóm không bao giờ lớn hơn cạnh dài
  hơn (hoặc 9), nên lưới nhỏ chỉ dùng các chữ số nhỏ.
`,u=e({default:()=>d}),d=`# Lật ô

Một lưới ô vuông, có ô sáng và có ô tối. Mục tiêu của bạn là làm sáng tất cả cùng lúc. Nhấn
một ô sẽ lật nó giữa sáng và tối, nhưng đồng thời cũng lật một số ô lân cận: sơ đồ nhỏ vẽ
trên mỗi ô cho biết chính xác những ô nào. Với kiểu hình mặc định **Chữ thập**, mỗi lần
nhấn sẽ lật ô đó cùng bốn ô kề cạnh; với kiểu **Ngẫu nhiên**, mỗi ô có một hình dạng bất
thường riêng, nên mỗi lần chơi lại khác nhau.

Vì nhấn một ô hai lần thì triệt tiêu nhau, và thứ tự các lần nhấn không bao giờ quan trọng,
nên lời giải chỉ là một tập hợp các ô, mỗi ô nhấn một lần.

## Điều khiển

Thanh trạng thái đếm số lần nhấn của bạn. **Giải** làm sáng toàn bộ bàn chơi và viền đỏ
những ô nó đã nhấn để đạt được kết quả đó. Nếu sau đó bạn tiếp tục nhấn các ô, viền đỏ sẽ
cho biết những ô nào vẫn cần nhấn để quay về trạng thái hoàn thành.

### Chuột và cảm ứng

- **Nhấp** vào một ô để nhấn nó.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ quanh lưới; **Enter** hoặc **Space** nhấn ô dưới con
  trỏ.

## Tham số

- **Chiều rộng** và **chiều cao** của lưới, từ 2 đến 10 ô mỗi cạnh.
- **Kiểu hình**: _Chữ thập_ lật mỗi ô cùng với các ô kề cạnh; _Ngẫu nhiên_ cho mỗi ô một hình
  dạng mọc ngẫu nhiên trong khối 3×3 quanh nó.
`,f=e({default:()=>p}),p=`# Loang màu

Lưới là một tấm chắp vá gồm các ô tô màu ngẫu nhiên. Bạn điều khiển ô ở góc trên bên trái
cùng với mọi ô nối với nó qua một đường cùng màu. Mỗi nước đi tô lại toàn bộ mảng liền nhau
đó bằng một màu bạn chọn, nên mọi ô lân cận có màu đó cũng nhập vào mảng của bạn. Cứ tiếp
tục cho đến khi cả lưới chỉ còn một màu.

Cái khó là giới hạn số nước. Trước khi bạn bắt đầu, trò chơi tự giải lưới và cho bạn số
nước của nó cộng thêm vài nước dư; dùng hết giới hạn trước khi lưới đồng màu là thua ván
đó. Sau đó bạn vẫn có thể tô tiếp để xem lưới hoàn chỉnh, nhưng không còn được tính là
thắng.

## Điều khiển

Thanh trạng thái cho biết bạn đã dùng bao nhiêu nước trên tổng giới hạn. **Giải** để trình
giải hoàn thành lưới giúp bạn; khi đó ván được tính là tự giải chứ không phải bạn tự thắng.

### Chuột và cảm ứng

- **Nhấp** vào bất kỳ ô nào khác màu với mảng của bạn để tô lại mảng bằng màu đó. Nhấp vào
  ô đã cùng màu thì không có tác dụng gì và không tốn nước.
- **Gợi ý** đi màu tiếp theo của trình giải giúp bạn, như một nước đi bình thường có thể
  hoàn tác. Dùng vài gợi ý thì chiến thắng, cùng với sao, vẫn là của bạn.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ quanh lưới; **Enter** hoặc **Space** tô lại mảng bằng
  màu của ô dưới con trỏ.

## Tham số

- **Chiều rộng** và **chiều cao** của lưới, tối đa 32 ô mỗi cạnh.
- **Số màu**: lưới dùng bao nhiêu màu, từ 3 đến 10. Ít màu hơn nghĩa là ít lựa chọn hơn và
  trò chơi dễ hơn.
- **Số nước dư cho phép**: số nước dư được cộng vào độ dài lời giải của trình giải để tạo
  thành giới hạn số nước. Với 0, bạn phải hiệu quả ít nhất bằng trình giải; nó khá giỏi
  nhưng không hoàn hảo, nên vẫn có thể đi ít nước hơn nó.
`,m=e({default:()=>h}),h=`# Thiên hà

Lưới có rải rác các dấu chấm, có thể nằm ở giữa một ô, trên đường kẻ giữa hai ô hoặc tại
góc nơi bốn ô gặp nhau. Hãy vẽ tường dọc theo các đường kẻ lưới để chia lưới thành các vùng
sao cho mỗi vùng chứa đúng một dấu chấm, và dấu chấm đó là tâm đối xứng của vùng: xoay vùng
180° quanh dấu chấm thì nó phải trùng khít với chính nó. Mọi ô đều phải thuộc một vùng nào
đó, nên không vùng nào được thiếu dấu chấm.

Các câu đố được tạo ngẫu nhiên với lời giải duy nhất. Đây là câu đố "Tentai Show" của
Nikoli, còn gọi là Spiral Galaxies.

## Điều khiển

Một vùng đã khép kín và đúng — một dấu chấm, nằm ở tâm đối xứng, không có bức tường thừa
nào bên trong — sẽ được tô bóng. Dấu chấm chuyển sang màu đỏ khi có tường chạy xuyên qua
nó, hoặc khi nó là dấu chấm duy nhất trong một vùng khép kín không đối xứng quanh nó; vùng
khép kín không chứa dấu chấm nào sẽ bị gạch chéo. Câu đố hoàn thành khi mọi ô đều được tô
bóng. **Giải** vẽ toàn bộ lời giải.

### Chuột và cảm ứng

- **Nhấp** vào một đường kẻ lưới để vẽ tường ở đó, hoặc nhấp vào một bức tường để xóa nó.
- **Kéo từ một dấu chấm** vào một ô để để lại một mũi tên nhỏ ở đó chỉ ngược về dấu chấm,
  như lời nhắc rằng ô đó thuộc thiên hà của dấu chấm ấy.
- **Kéo chuột phải** một mũi tên có sẵn để di chuyển nó. Thả nó lại lên dấu chấm của nó,
  hoặc kéo nó ra khỏi lưới, để bỏ đi; thả lên ô đã có mũi tên thì nó sẽ thay thế mũi tên đó.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ qua các ô, đường kẻ và góc như nhau.
- **Enter** trên một đường kẻ sẽ vẽ hoặc xóa tường ở đó; **Enter** trên một dấu chấm sẽ
  nhặt một mũi tên, mũi tên này đi theo con trỏ cho đến khi bạn nhấn **Enter** lần nữa để
  thả xuống.

## Tham số

- **Chiều rộng** và **chiều cao** của lưới, mỗi chiều ít nhất là 3. Các mẫu có sẵn từ 7×7
  đến 15×15.
- **Độ khó** — câu đố _Vừa_ có thể giải từng bước dựa trên những gì quy tắc đối xứng bắt
  buộc; câu đố _Cực khó_ có thể cần bạn thử một giả định và xem nó dẫn tới đâu.
`,g=e({default:()=>_}),_=`# Đoán màu

Máy đã giấu một hàng chốt màu sau tấm chắn ở đầu bàn chơi. Nhiệm vụ của bạn là tái tạo
chính xác hàng đó, chỉ dựa vào các dấu chấm điểm nhận được cho mỗi lần đoán: một chốt
**đen** cho mỗi chốt đúng màu, đúng chỗ, và một chốt **rỗng** cho mỗi chốt khác có màu xuất
hiện ở chỗ khác trong hàng bị giấu. Các dấu cho bạn biết _bao nhiêu_ chốt đúng, chứ không
cho biết _những chốt nào_. Tìm ra hàng trước khi hết lượt đoán thì tấm chắn sẽ mở; hết lượt
thì nó cũng mở, để cho bạn thấy mình đã bỏ lỡ gì.

Đây là trò chơi được Hasbro bán với tên _Mastermind_: sáu màu, bốn chốt và mười lần đoán.
Mọi thiết lập đều có thể thay đổi.

## Điều khiển

**Giải** mở tấm chắn và hiện đáp án; việc này kết thúc ván chơi giống như khi hết lượt
đoán.

### Chuột và cảm ứng

- **Nhấp** vào một màu trong khay bên trái để chọn nó (vòng tròn cho biết màu đang chọn),
  rồi **nhấp vào một lỗ** trong hàng hiện tại để đặt chốt màu đó. Nhấp vào một chốt trong
  lần đoán trước cũng chọn màu của nó.
- **Kéo** một chốt từ khay, từ lần đoán trước hoặc từ hàng hiện tại vào một lỗ. Kéo một chốt
  ra khỏi hàng hiện tại và thả ở chỗ khác sẽ xóa nó.
- **Nhấp chuột phải** vào một lỗ để làm trống nó.
- Khi hàng đã đầy, ô chấm điểm nhỏ bên phải nó sẽ sáng lên: **nhấp vào đó** để gửi lần
  đoán.
- **Nhấp chuột giữa** vào một lỗ để _giữ_ chốt đó: chốt được giữ sẽ được mang sang lần đoán
  tiếp theo sau khi chấm điểm, giúp bạn khỏi phải xếp lại những chốt đã tin chắc. Làm lại
  lần nữa để bỏ giữ.
- **Giữ** (nút cạnh nút Hoàn tác) làm điều tương tự bằng một cú nhấp thường: khi bật, nhấp vào một lỗ trong hàng hiện tại sẽ giữ hoặc bỏ giữ chốt ở đó thay vì đặt màu. Nhấp vào khay để đổi màu như thường; nhấn **Giữ** lần nữa để quay về đặt chốt.
- **Chữ cái** trong menu tạm dừng ghi một chữ cái lên mỗi chốt, phòng khi bạn thấy một số màu
  trông giống nhau, và xóa chúng đi khi nhấn lại.

### Bàn phím (Keyboard)

- **Phím mũi tên**: lên và xuống chọn màu trong khay, trái và phải di chuyển con trỏ dọc
  hàng hiện tại và, khi hàng đã đầy, sang ô chấm điểm.
- **Enter** hoặc **Space** đặt màu đang chọn vào lỗ dưới con trỏ, hoặc gửi lần đoán khi con
  trỏ ở trên ô chấm điểm.
- **Backspace** hoặc \`D\` làm trống lỗ dưới con trỏ.
- \`H\` giữ hoặc bỏ giữ chốt dưới con trỏ.
- \`K\` là nút **Giữ** và \`L\` là nút **Chữ cái**.

## Tham số

- **Số màu**: hàng bị giấu được chọn từ bao nhiêu màu khác nhau, từ 2 đến 10. Càng nhiều màu
  thì càng khó xác định hàng.
- **Số chốt mỗi lần đoán**: độ dài của hàng bị giấu.
- **Số lần đoán**: bạn có bao nhiêu lượt thử.
- **Cho phép ô trống**: cho phép bạn để trống lỗ trong một lần đoán. Lỗ trống không bao giờ
  khớp, nên điều này giúp dò màu dễ hơn. Bản thân hàng bị giấu không bao giờ có lỗ trống.
- **Cho phép trùng màu**: cho phép hàng bị giấu (và các lần đoán của bạn) dùng một màu nhiều
  lần. Tắt tùy chọn này sẽ giảm đáng kể số hàng có thể có.
`,v=e({default:()=>y}),y=`# Quán tính

Bạn là một viên bi trên lưới đầy chướng ngại vật, và bạn muốn lấy hết đá quý trên bàn chơi.
Cái khó nằm ngay ở tên gọi: một khi viên bi bắt đầu lăn, nó không dừng lại cho đến khi có
thứ gì đó chặn nó. Nó lăn thẳng qua đá quý (nhặt chúng trên đường đi) cũng như qua ô trống,
và chỉ dừng lại khi ô tiếp theo là tường hoặc khi nó lăn vào một điểm dừng. Nước đi chéo
có thể lách qua giữa hai bức tường chỉ chạm nhau ở góc. Lăn vào mìn là chết, kể cả khi
chính nước đó vừa nhặt được viên đá quý cuối cùng.

Mỗi câu đố được tạo sao cho có thể nhặt hết đá quý từ ô xuất phát, nhưng không có gì ngăn
bạn lăn vào một góc của bàn chơi mà từ đó không còn tới được viên đá quý nào đó. Chết hay
bị kẹt cũng không bị phạt gì ngoài bộ đếm số lần chết trên thanh trạng thái: chỉ cần hoàn
tác và thử cách khác.

## Điều khiển

**Hoàn tác** sau khi đụng mìn để tiếp tục từ trước nước đi chết người. **Giải** tìm một lộ
trình từ vị trí hiện tại để nhặt hết số đá quý còn lại, rồi lăn viên bi theo lộ trình đó
giúp bạn; Hoàn tác sẽ lấy lại cả lộ trình trong một lần.

### Chuột và cảm ứng

- **Nhấp** vào một ô và viên bi sẽ lăn về hướng của ô đó so với nó, làm tròn tới hướng gần
  nhất trong tám hướng — kể cả các hướng chéo. Nhấp vào lề bên ngoài lưới cũng được, rất
  tiện khi viên bi đang nằm sát mép.

### Bàn phím (Keyboard)

- **Phím mũi tên** lăn viên bi lên, xuống, sang trái hoặc sang phải.
- **Home**, **Page Up**, **End** và **Page Down** lăn chéo (lên-trái, lên-phải, xuống-trái,
  xuống-phải). Bàn phím số hoạt động đúng như vị trí các phím: 8 là lên, 3 là xuống-phải,
  v.v.; hàng phím số phía trên cũng vậy.

## Tham số

- **Chiều rộng** và **chiều cao** của lưới. Khoảng một phần năm số ô là tường, một phần năm
  là điểm dừng, một phần năm là mìn và một phần năm là đá quý.
`,b=e({default:()=>x}),x=`# Lồng số

Điền vào lưới các chữ số từ 1 đến kích thước lưới sao cho mỗi hàng và mỗi cột chứa mỗi chữ
số đúng một lần. Lưới còn được chia thành các "lồng" viền đậm, mỗi lồng có một manh mối nhỏ
ở ô trên cùng bên trái: một kết quả và một dấu phép tính. Các chữ số trong lồng phải cho ra
kết quả đó bằng phép tính đó:

- \`7+\` nghĩa là các chữ số trong lồng cộng lại bằng 7.
- \`12×\` nghĩa là chúng nhân lại bằng 12.
- \`2−\` luôn nằm trên lồng hai ô và nghĩa là một chữ số lớn hơn chữ số kia 2 đơn vị (theo
  chiều nào cũng được).
- \`3÷\` cũng nằm trên lồng hai ô và nghĩa là một chữ số gấp 3 lần chữ số kia.

Khác với chế độ Killer của Sudoku, một lồng _có thể_ chứa cùng một chữ số hai lần, miễn là
hai chữ số đó không nằm cùng hàng hoặc cùng cột. Không có chữ số cho sẵn; bạn chỉ có các
manh mối, và mỗi câu đố có đúng một lời giải. Đây là câu đố được phát hành với tên KenKen.

## Điều khiển

Chữ số xuất hiện hai lần trong hàng hoặc cột của nó sẽ chuyển sang màu đỏ, và manh mối của
một lồng đã điền kín nhưng không cho ra đúng kết quả cũng vậy. **Giải** điền lời giải vào.

### Chuột và cảm ứng

- **Nhấp** vào một ô để chọn nó, rồi dùng bàn phím số trên màn hình để điền chữ số. Nhấp lần
  nữa vào ô đang chọn sẽ bỏ chọn.
- **⌫** trên bàn phím số xóa trống lại ô đang chọn, còn **✎** bật chế độ **ghi chú bút chì**:
  khi đó thứ bạn chọn sẽ được nhập thành một ghi chú nhỏ, và chọn lại cùng chữ số đó sẽ xóa
  ghi chú. Ghi chú bút chì chỉ để giúp bạn suy nghĩ; điền một chữ số sẽ xóa chúng.
- **Nhấp chuột phải** vào một ô trống để chọn nó cho ghi chú bút chì ngay lập tức.
- **Ghi chú** trong menu tạm dừng điền đầy đủ ghi chú bút chì vào mọi ô trống.
- **Tô sáng** (nút kính lúp cạnh nút Hoàn tác) làm nổi bật mọi ô chứa cùng chữ số với ô bạn nhấp gần nhất, và in đậm chữ số đó giữa các ghi chú bút chì. Nhấn lại để tắt.

### Bàn phím (Keyboard)

- **Gõ một chữ số** để điền vào ô đang chọn, hoặc để ghi chú nó vào đó khi ô được chọn cho
  ghi chú bút chì.
- **Space** hoặc **Backspace** xóa ô đang chọn (chữ số hoặc toàn bộ ghi chú bút chì của nó).
- **Phím mũi tên** di chuyển con trỏ bàn phím, và chữ số bạn gõ sẽ điền vào ô dưới con trỏ.
- **Enter** chuyển con trỏ giữa chế độ nhập thường và nhập ghi chú bút chì.
- **M** là nút **Ghi chú** và **L** là nút **Tô sáng**.

## Tham số

- **Kích thước lưới**: từ 3 đến 9. Chữ số lớn hơn 9 sẽ khó dùng, nên 9 là giới hạn.
- **Độ khó**: kiểu suy luận khó nhất mà câu đố cần. _Dễ_ chỉ cần bạn tìm ra những chữ số nào
  có thể xuất hiện trong một lồng; _Vừa_ cần bạn theo dõi mỗi chữ số có thể nằm ở ô nào của
  lồng; _Khó_ thêm suy luận xuyên lồng (những chữ số mà một lồng bắt buộc phải đặt trong một
  hàng thì không thể nằm ở chỗ khác trong hàng đó) và những nhóm ô chiếm trọn một nhóm chữ
  số; _Chuyên gia_ thêm chuỗi suy diễn bắt buộc; còn câu đố _Cực khó_ không thể hoàn thành
  nếu không đoán và quay lui. Câu đố càng khó thì càng lâu để tạo, và lưới 3×3 không bao giờ
  vượt quá mức Vừa.
- **Chỉ phép nhân**: mọi manh mối đều là tích, điều này loại bỏ các lồng hai ô dễ dàng và tạo
  ra một câu đố khá khác biệt.
`,S=e({default:()=>C}),C=`# Thắp đèn

Một lưới gồm các ô trắng và ô đen. Hãy đặt bóng đèn lên các ô trắng sao cho mọi ô trắng đều
được chiếu sáng. Một bóng đèn chiếu sáng ô của nó và chiếu dọc theo hàng và cột cho đến khi
gặp ô đen hoặc mép lưới. Khi hoàn thành, phải đảm bảo ba điều:

- mọi ô trắng đều được chiếu sáng;
- không bóng đèn nào bị bóng khác chiếu vào, tức là không có hai bóng nào nhìn thấy nhau dọc
  theo một hàng hay cột;
- một ô đen mang con số có đúng bấy nhiêu bóng đèn ở các ô ngay phía trên, dưới, trái và
  phải của nó. Ô đen không có số có thể có bao nhiêu bóng bên cạnh cũng được.

Ô được chiếu sáng có màu vàng nhạt. Những bóng chiếu vào nhau chuyển sang màu đỏ, và con số
không thể thỏa mãn được nữa cũng vậy: nó đã có quá nhiều bóng bên cạnh, hoặc không còn đủ
chỗ cho đủ số bóng.

## Điều khiển

Câu đố hoàn thành khi cả lưới sáng rực và không có gì màu đỏ. **Gợi ý** đặt một bóng đèn —
hoặc gỡ một bóng không có trong đáp án — và để phần còn lại cho bạn; câu đố vẫn tiếp tục, và
dùng vài gợi ý thì chiến thắng, cùng với sao, vẫn là của bạn. **Giải** điền các bóng đèn của
cả lời giải, giữ nguyên các dấu gạch chéo bạn đã vẽ.

### Chuột và cảm ứng

- **Nhấp** vào một ô trắng để đặt bóng đèn ở đó, nhấp lần nữa để gỡ nó đi.
- **Nhấp chuột phải** vào một ô trắng để ghi chú bút chì một dấu gạch chéo nghĩa là "không
  thể đặt bóng ở đây"; nhấp chuột phải lần nữa để xóa. Ô đã gạch chéo sẽ không nhận bóng cho
  đến khi dấu gạch được xóa, và ô có bóng thì không thể gạch chéo.
- **Gạch chéo** (nút dấu gạch chéo cạnh nút Hoàn tác) khiến một cú nhấp thường ghi chú hoặc xóa dấu gạch chéo thay vì bóng đèn, tiện khi bạn loại trừ nhiều ô cùng lúc. Nhấn lại để quay về đặt bóng.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ quanh lưới.
- **Enter** đặt hoặc gỡ bóng đèn dưới con trỏ, còn **Space** (hoặc **I**) bật tắt dấu gạch
  chéo ở đó.
- **X** là nút **Gạch chéo**.

## Tham số

- **Chiều rộng** và **chiều cao** của lưới.
- **% ô đen**: khoảng bao nhiêu phần của lưới là ô đen. Đây là con số tham khảo, không phải
  cam kết: nếu không tạo được câu đố với mật độ đó, trình tạo sẽ dùng thêm vài ô đen.
- **Đối xứng**: kiểu sắp xếp các ô đen — không đối xứng, gương hoặc xoay giữa hai nửa, hoặc
  gương hay xoay bốn chiều. Xoay bốn chiều cần lưới vuông.
- **Độ khó**: câu đố _Dễ_ giải được bằng suy luận từng ô một về việc ô nào bắt buộc hoặc
  không thể có bóng. Câu đố _Vừa_ cần bạn cân nhắc các nhóm ô với nhau ("một trong ba ô này
  phải có bóng, và điều đó loại trừ ô kia"). Câu đố _Khó_ có thể đòi hỏi thử đặt một bóng ở
  đâu đó và lần theo hệ quả cho đến khi có gì đó sai. Mỗi câu đố có đúng một lời giải.
`,w=e({default:()=>T}),T=`# Vòng khép kín

Một lưới các dấu chấm, trong đó một số khoảng giữa các chấm có ghi con số. Hãy vẽ một vòng
khép kín duy nhất dọc theo các đường mờ giữa các chấm sao cho:

- mỗi khoảng có số có đúng bấy nhiêu cạnh nằm trên vòng;
- vòng không bao giờ tự cắt hay tự chạm vào mình — mỗi chấm có hai đường hoặc không có
  đường nào — và chỉ có một vòng duy nhất, không có đầu lửng hay mảnh rời.

Phiên bản kinh điển dùng ô vuông, nhưng câu đố này cũng chơi được trên tam giác, lục giác
và hàng chục kiểu lát kỳ lạ hơn, nơi các con số có thể vượt xa 4.

Những đường tạo thành vòng sai, hoặc ba đường gặp nhau tại một chấm, sẽ chuyển sang màu đỏ;
một con số có quá nhiều đường quanh nó, hoặc còn quá ít cạnh có thể dùng, cũng chuyển đỏ.
Một con số chuyển sang màu xám khi nó có đúng số đường cần thiết.

## Điều khiển

**Giải** vẽ toàn bộ vòng. Câu đố hoàn thành ngay khi vòng khép kín và mọi con số đều được
thỏa mãn; việc gạch bỏ các cạnh không dùng đến là không bắt buộc.

### Chuột và cảm ứng

- **Nhấp** vào một cạnh mờ để vẽ đường lên đó; nhấp vào đường đó lần nữa để xóa nó.
- **Nhấp chuột phải** vào một cạnh để gạch bỏ nó, đánh dấu chắc chắn nó không thuộc vòng;
  nhấp chuột phải lần nữa để xóa dấu. Nhấp hay nhấp chuột phải đều xóa được dấu do thao
  tác kia tạo ra.
- **Gạch bỏ** (nút dấu gạch chéo cạnh nút Hoàn tác) khiến một cú nhấp thường gạch bỏ một cạnh, hoặc xóa dấu gạch, thay vì vẽ đường. Nhấn lại để quay về vẽ đường.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ từ cạnh này sang cạnh khác; **Enter** vẽ hoặc xóa
  đường trên cạnh dưới con trỏ và **Space** gạch bỏ hoặc xóa dấu gạch.
- **X** là nút **Gạch bỏ**.

## Tham số

- **Chiều rộng** và **Chiều cao** của lưới, tính theo đơn vị của kiểu lát. Với lưới ô vuông,
  đó đơn giản là số ô theo chiều ngang và chiều dọc; các kiểu lát khác đếm theo đơn vị lặp
  lại của chúng, nên số mặt thực tế sẽ thay đổi.
- **Kiểu lưới**: _Ô vuông_, _Tam giác_ và _Tổ ong_ là các kiểu lát đều.
  _Vuông cắt vát_, _Cairo_, _Lục giác lớn_, _Bát giác_, _Cánh diều_, _Hoa thị_,
  _Thập nhị giác_ và _Thập nhị giác lớn_ kết hợp nhiều hình, còn hai kiểu lát _Penrose_
  hoàn toàn không bao giờ lặp lại.
- **Độ khó**: câu đố _Dễ_ chỉ cần đến chính các luật chơi — đếm số đường quanh một con số,
  nhớ rằng mỗi chấm có hai đường hoặc không có đường nào, và không khép vòng quá sớm. _Vừa_
  thêm suy luận về các cặp cạnh gặp nhau tại một chấm (nhiều nhất một, hoặc ít nhất một,
  cạnh trong cặp là đường). _Khó_ cho phép các dữ kiện đó nối tiếp từ chấm này sang chấm
  khác, như dọc theo một dãy số 2 chéo. _Chuyên gia_ còn theo dõi các cạnh được biết là
  giống nhau hoặc ngược nhau. Không bao giờ phải đoán mò; mọi câu đố đều có đúng một lời
  giải.
`,E=e({default:()=>D}),D=`# Nam châm

Một hình chữ nhật đã được lát bằng các quân domino, chỉ hiện ra dưới dạng đường viền. Mỗi
quân domino hoặc là một nam châm — một nửa là cực \`+\`, nửa kia là cực \`−\` — hoặc là ô trống
không có cực nào. Các con số quanh mép cho biết mỗi đường có bao nhiêu cực \`+\` (phía trên
các cột và bên trái các hàng) và bao nhiêu cực \`−\` (phía dưới các cột và bên phải các hàng);
thiếu số nghĩa là đường đó không có manh mối. Hãy điền mọi quân domino sao cho đủ mọi con
số và không bao giờ có hai cực cùng dấu nằm cạnh nhau: \`+\` không được chạm \`+\` và \`−\`
không được chạm \`−\` qua ranh giới giữa hai quân domino. Ô trống thì trơ và có thể nằm cạnh
bất cứ thứ gì.

Các cực cùng dấu chạm nhau được hiện màu đỏ. Một con số chuyển đỏ khi không còn cách nào
đạt được — đã có quá nhiều cực, hoặc quá ít mà không còn chỗ để đặt thêm — và chuyển xám
khi đã khớp đúng. Câu đố hoàn thành khi mọi quân domino đã được điền, mọi con số đều khớp
và không còn gì màu đỏ.

## Điều khiển

### Chuột và cảm ứng

- **Nhấp** vào một nửa trống của quân domino để biến nó thành cực \`+\` (nửa kia thành \`−\`).
  Nhấp lại vào nửa đó để lật ngược nam châm, và nhấp lần thứ ba để làm trống quân domino.
  Nhấp vào quân domino đã đánh dấu trống thì không có tác dụng gì.
- **Nhấp chuột phải** vào một quân domino trống để đánh dấu nó là ô trống. Nhấp chuột phải
  lần nữa để thay dấu trống bằng dấu chấm hỏi, ghi chú rằng quân domino chắc chắn là nam
  châm; nhấp chuột phải lần thứ ba sẽ làm trống nó. Nhấp chuột phải vào một nam châm thì
  không có tác dụng gì.
- **Ô trống** (quân domino tô bóng cạnh nút Hoàn tác) khiến một cú nhấp thường làm việc của nhấp chuột phải: đánh dấu quân domino là ô trống, rồi dấu chấm hỏi, rồi trống trở lại. Nhấn lại để quay về đặt nam châm.
- **Giải** điền toàn bộ lời giải.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ quanh lưới.
- **Enter** xoay vòng nửa dưới con trỏ qua \`+\`, \`−\` và trống, giống như nhấp chuột trái.
- **Space** xoay vòng quân domino dưới con trỏ qua ô trống, dấu chấm hỏi và trống, giống
  như nhấp chuột phải.
- **B** là nút **Ô trống**.

## Tham số

- **Chiều rộng** và **Chiều cao** của lưới. Khi diện tích là số lẻ, sẽ dư ra một ô được vẽ
  gạch chéo; nó không thuộc quân domino nào và được tính là trung tính.
- **Độ khó**: câu đố _Dễ_ chỉ bao giờ cần bạn xét một đường hoặc một quân domino mỗi lúc —
  một con số đã đủ, một con số cần đến mọi ứng viên còn lại, hoặc một quân domino mà không
  nửa nào nhận được một cực nhất định. Câu đố _Khó_ còn đòi hỏi bạn suy luận về cả những
  quân domino nằm dọc theo một đường: một quân domino chắc chắn là nam châm sẽ góp một cực
  mỗi loại dù xoay chiều nào, một đường chỉ còn một chỗ trống thì không thể chứa một quân
  domino trống nằm dọc, và cứ thế. Mọi câu đố đều có đúng một lời giải.
- **Lược bớt manh mối**: bỏ đi mọi con số không cần thiết để giải câu đố ở độ khó đã chọn,
  khiến việc tìm chỗ bắt đầu khó hơn nhiều.
`,O=e({default:()=>k}),k=`# Tô bản đồ

Một bản đồ được chia thành các vùng. Hãy tô mỗi vùng bằng một trong bốn màu sao cho không
có hai vùng nào có chung một đoạn biên giới lại cùng màu. Các vùng chỉ chạm nhau ở một góc
thì được phép trùng màu. Một vài vùng đã được tô sẵn, và chúng được chọn sao cho chỉ có
đúng một cách để hoàn thành bản đồ.

Hai vùng kề nhau cùng màu sẽ bị đánh dấu bằng dấu \`!\` màu đỏ trên biên giới giữa chúng.

## Điều khiển

**Giải** tô toàn bộ lời giải. Bản đồ sẽ lóe sáng khi mọi vùng đã được tô và không còn gì
màu đỏ.

### Chuột và cảm ứng

- **Kéo** một màu: nhấn vào một vùng (hoặc vào một ô màu dưới bản đồ) rồi thả ở vùng khác
  để tô màu đó cho nó. Kéo từ một vùng chưa tô, từ khoảng trống quanh bản đồ, hoặc từ ô
  tẩy sẽ xóa màu vùng bạn thả vào.
- **Nhấp vào một ô màu** để chọn màu, rồi **nhấp** vào các vùng để tô; nhấp lại vào ô màu
  đang chọn để bỏ chọn.
- **Kéo chuột phải** một màu vào một vùng chưa tô để ghi chú bút chì một chấm nhỏ màu đó,
  ghi nhận rằng vùng đó _có thể_ là màu này. Một vùng có thể mang nhiều chấm ghi chú; kéo
  cùng màu đó lần nữa sẽ xóa chấm của nó. Khi đang chọn một ô màu, **nhấp chuột phải**
  vào một vùng chưa tô sẽ bật hoặc tắt chấm của nó.
- **Số** (trong menu tạm dừng) hiện một con số trong mỗi vùng, tiện khi bàn về câu đố với người khác, và ẩn chúng đi khi nhấn lại.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ quanh bản đồ; vùng chứa con trỏ được viền lại. Phím
  **1**–**4** tô màu vùng đó, **Space** xóa màu, và **Enter** nhặt màu của vùng để bạn mang
  nó đi bằng phím mũi tên và thả xuống bằng **Enter** (hoặc thành chấm ghi chú bằng
  **Space**). Nhấn **Enter** hai lần mà không di chuyển sẽ xóa màu vùng đó.
- **L** là nút **Số**.

## Tham số

- **Chiều rộng** và **Chiều cao** của lưới dùng để vẽ bản đồ, tính theo ô.
- **Số vùng**: bản đồ được chia thành bao nhiêu vùng.
- **Độ khó**: câu đố _Dễ_ luôn có một vùng chỉ còn đúng một màu có thể tô. _Vừa_ thêm suy
  luận về các cặp vùng kề nhau buộc phải dùng chung hai màu giữa chúng. _Khó_ cần những
  chuỗi suy luận như vậy trải khắp bản đồ. Tất cả đều giải được mà không cần đoán. _Cực khó_
  chỉ đảm bảo lời giải là duy nhất; bạn có thể phải thử một màu và đi theo nó cho đến khi có
  gì đó sai.
`,A=e({default:()=>j}),j=`# Dò mìn

Một lưới các ô bị che giấu một số quả mìn. Hãy mở mọi ô _không_ chứa mìn. Mỗi ô bạn mở
cho biết có bao nhiêu trong tám ô xung quanh là mìn; mở phải mìn là thua.

Điểm đặc biệt của phiên bản này là bạn không bao giờ phải đoán mò. Chưa có gì được quyết
định cho đến cú nhấp đầu tiên của bạn: lúc đó mìn mới được đặt sao cho ô bạn vừa nhấp là ô
trống và cả lưới có thể suy ra hoàn toàn bằng suy luận từ đó. Nếu bạn thấy bí, luôn có một
ô an toàn ở đâu đó mà các con số đã chứng minh được.

Thanh trạng thái cho biết bạn đã cắm bao nhiêu cờ so với số mìn, và đồng hồ bắt đầu chạy
từ cú nhấp đầu tiên. Đạp phải mìn sẽ làm lộ ra tất cả số mìn còn lại và gạch bỏ các cờ cắm
sai; bạn có thể Hoàn tác cú nhấp chết người đó và chơi tiếp, nhưng lần chết đó vẫn được ghi
lại trên thanh trạng thái.

## Điều khiển

### Chuột và cảm ứng

- **Nhấp** vào một ô bị che để mở nó. Mở một ô trống (không có mìn xung quanh) sẽ mở luôn
  các ô xung quanh nó, và cứ thế lan ra.
- **Nhấp chuột phải** vào một ô bị che để cắm cờ lên chỗ nghi có mìn, và nhấp chuột phải
  lần nữa để gỡ cờ. Ô đã cắm cờ không thể bị mở nhầm.
- **Nhấp vào một con số** đã có đủ số cờ xung quanh để mở tất cả các ô bị che còn lại
  quanh nó trong một lần. **Nhấp chuột giữa** vào con số đó cũng có tác dụng tương tự.
- **Gợi ý** mở một ô an toàn — hoặc gỡ một cờ không có mìn bên dưới — và để phần còn lại
  của lưới cho bạn. Dùng vài gợi ý thì chiến thắng, cùng sao của nó, vẫn thuộc về bạn.
- **Giải** làm lộ toàn bộ bố cục, cắm cờ lên mọi quả mìn. Việc này không được tính là bạn
  tự thắng.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ quanh lưới.
- **Enter** có tác dụng như nhấp chuột trái vào ô dưới con trỏ: mở một ô bị che, hoặc mở
  quanh một con số đã cắm đủ cờ.
- **Space** cắm hoặc gỡ cờ, giống như nhấp chuột phải.

## Tham số

- **Chiều rộng** và **Chiều cao** của lưới.
- **Số mìn**: số mìn cần giấu. Bạn có thể nhập tỷ lệ phần trăm như \`20%\` thay cho số
  lượng. Mật độ quá cao khiến việc tìm lưới giải được trở nên chậm.
- **Đảm bảo giải được**: khi bật (mặc định), bố cục được đảm bảo giải được từ cú nhấp đầu
  tiên mà không cần đoán. Tắt đi để có lưới ngẫu nhiên thông thường, có thể khiến bạn phải
  tung đồng xu ở cuối ván.
`,M=e({default:()=>N}),N=`# Nối mạng

Một mạng dây điện đã được trải khắp một lưới các mảnh vuông, rồi mọi mảnh đều bị xoay ngẫu
nhiên. Hãy xoay các mảnh trở lại sao cho tất cả được nối thành một mạng duy nhất: mọi đầu
dây phải gặp một dây trên mảnh kề bên, và không dây nào được chĩa vào tường. Mạng hoàn chỉnh
có dạng cây, nên không có vòng khép kín nào.

Các mảnh đã được nối với mảnh nguồn ở giữa lưới được vẽ màu xanh để làm hướng dẫn; số còn
lại vẫn màu xám. Dây nằm trong một vòng được vẽ màu đỏ. Các vạch đen đậm giữa các mảnh là
rào chắn: không dây nào đi qua được, và điều đó gợi ý cho bạn cách các mảnh ở hai bên phải
nằm. Thanh trạng thái cho biết hiện có bao nhiêu mảnh đang có điện.

## Điều khiển

### Chuột và cảm ứng

- **Nhấp** vào một mảnh để xoay nó ngược chiều kim đồng hồ, **nhấp chuột phải** để xoay
  theo chiều kim đồng hồ.
- **Nhấp chuột giữa** vào một mảnh để **khóa** nó khi bạn đã chắc chắn. Mảnh bị khóa được
  tô bóng và sẽ không xoay cho đến khi một lần nhấp chuột giữa khác mở khóa nó.
  Nhấp chuột phải sẽ xoay mảnh chứ không khóa nó, nên nhấp chuột giữa là cách để làm việc này.
- **Khóa** (nút ổ khóa cạnh nút Hoàn tác) khiến một cú nhấp thường khóa hoặc mở khóa một mảnh thay vì xoay nó, dễ hơn nhấp chuột giữa trên bàn di chuột. Nhấp chuột phải vẫn xoay mảnh theo chiều kim đồng hồ. Nhấn lại để quay về xoay mảnh.
- **Xáo trộn** xoay mọi mảnh chưa khóa sang một hướng ngẫu nhiên mới, để đổi gió khi câu đố
  đã bế tắc.
- Trên lưới nối vòng, bốn **nút mũi tên** cuộn khung nhìn, để các mảnh ở hai mép đối diện
  có thể được đưa lại cạnh nhau.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ quanh lưới.
- **Enter** hoặc **A** xoay mảnh dưới con trỏ ngược chiều kim đồng hồ, **D** xoay theo chiều
  kim đồng hồ và **F** xoay nửa vòng.
- **Space**, **S** hoặc **L** khóa hoặc mở khóa mảnh dưới con trỏ. Với chuột, **Shift +
  nhấp** cũng khóa một mảnh, y như nhấp chuột giữa.
- **K** tương đương nút **Khóa** và **J** tương đương nút **Xáo trộn**.
- Trên lưới nối vòng, **Shift + phím mũi tên** cuộn khung nhìn (giống bốn nút mũi tên) để
  thấy các mảnh ở hai mép đối diện nằm cạnh nhau. **Ctrl + phím mũi tên** di chuyển mảnh
  nguồn, nơi phần tô sáng màu xanh lan ra.

## Tham số

- **Chiều rộng** và **Chiều cao** của lưới, tính theo mảnh.
- **Mép nối vòng**: dây có thể chạy ra khỏi một mép lưới và tiếp tục từ mép đối diện.
- **Xác suất có rào chắn**: một số từ 0 đến 1 cho biết tỷ lệ các cạnh không có dây sẽ được
  đặt rào chắn. Rào chắn không bao giờ làm thay đổi bố cục dây: cùng một hạt giống ngẫu
  nhiên luôn cho cùng một lưới, nên tăng xác suất chỉ thêm gợi ý.
- **Đảm bảo lời giải duy nhất**: thông thường câu đố được sắp xếp sao cho chỉ đúng một cách
  xếp các mảnh là đúng. Tắt đi để tạo câu đố nhanh hơn, đổi lại thỉnh thoảng có một vùng
  mơ hồ.
`,P=e({default:()=>F}),F=`# Trượt mạng

Mỗi mảnh mang một đoạn dây: một đoạn thẳng, một góc, một ngã ba hoặc một đầu cụt có dấu
chấm. Ghép đúng cách, các đoạn tạo thành một mạng duy nhất đi tới mọi mảnh từ nguồn điện
trên mảnh trung tâm được tô bóng, không có vòng và không có nhánh nào chĩa vào khoảng không.
Lưới đã bị xáo trộn bằng cách trượt nguyên hàng và cột, nên đó cũng là cách duy nhất để
sửa lại: không mảnh nào xoay được, chỉ di chuyển được.

Các mảnh đang có điện được vẽ màu xanh; số còn lại vẫn màu xám. Các vách đen đậm giữa các
mảnh là rào chắn. Không gì nối qua được rào chắn, nên chúng cho bạn biết chỗ nào trong mạng
hoàn chỉnh chắc chắn không có kết nối.

## Điều khiển

### Chuột và cảm ứng

- **Nhấp** vào mũi tên cạnh một hàng hoặc cột để trượt cả đường đó một bước theo hướng mũi
  tên. Mảnh bị đẩy ra khỏi đầu này sẽ quay vào ở đầu kia của cùng đường đó.
  **Nhấp chuột phải** vào mũi tên để trượt đường đó theo hướng ngược lại.
- Hàng và cột ở giữa không có mũi tên: nguồn điện không bao giờ di chuyển.
- **Giải** nhảy thẳng tới mạng hoàn chỉnh để bạn so sánh với cách làm của mình.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển ô tô sáng quanh vòng mũi tên.
- **Enter** trượt đường đang tô sáng theo hướng mũi tên của nó và **Space** trượt ngược lại.

## Tham số

- **Chiều rộng** và **Chiều cao** của lưới.
- **Mép nối vòng**: khi bật, mép phải nối tiếp với mép trái và mép dưới nối với mép trên,
  nên dây (và rào chắn) có thể đi qua mép lưới. Khung nét đứt đánh dấu lưới nối vòng; khung
  liền đậm là tường bao quanh.
- **Xác suất có rào chắn**: bao nhiêu cạnh mảnh không dùng đến sẽ có rào chắn, từ 0 (không
  có) đến 1 (mọi cạnh mà mạng hoàn chỉnh không dùng). Càng nhiều rào chắn câu đố càng dễ.
  Rào chắn được chọn độc lập với phần còn lại của lưới, nên cùng một hạt giống ngẫu nhiên
  với xác suất rào chắn cao hơn sẽ cho cùng câu đố nhưng nhiều gợi ý hơn.
- **Số nước xáo trộn**: để 0 để xáo trộn kỹ, hoặc đặt một con số để xáo trộn bằng đúng
  bấy nhiêu lần trượt. Mục tiêu khi đó là tìm và đảo ngược chúng; thanh trạng thái hiện số
  nước mục tiêu.
`,I=e({default:()=>L}),L=`# Tô tranh

Mỗi ô của lưới bí mật là đen hoặc trắng. Các con số cạnh mỗi hàng và phía trên mỗi cột cho
bạn biết độ dài các dải ô đen trong đường đó, theo thứ tự, với ít nhất một ô trắng giữa hai
dải liên tiếp. Hãy tô đen các ô sao cho mọi hàng và mọi cột đều khớp với các con số của
nó. Loại câu đố này thường được gọi là nonogram hay picross.

Các bức tranh ở đây được tạo ngẫu nhiên, nên không có hình ảnh nào để đoán: mọi thứ phải
được suy ra từ các con số. Mỗi câu đố đều được kiểm tra trước để đảm bảo có thể giải bằng
cách suy luận từng hàng hoặc từng cột một, nên bạn không bao giờ phải thử mò.

Các con số của một đường chuyển xám khi các dải đen trong đường đó khớp với chúng, và chuyển
đỏ nếu những dải bạn đã hoàn thành không thể nào khớp với các con số. Câu đố hoàn thành khi
mọi hàng và cột đều khớp với các con số của nó; các dấu chấm chỉ để giúp bạn ghi nhớ.

## Điều khiển

### Chuột và cảm ứng

- **Nhấp** vào một ô để tô đen nó; nhấp lại vào ô đen để xóa.
- **Nhấp chuột phải** để đánh dấu chấm lên một ô, nghĩa là biết chắc nó màu trắng;
  nhấp chuột phải vào ô có chấm để xóa.
- **Kéo** để tô một đường thẳng các ô đen trong một lần, và **kéo chuột phải** để đặt một
  dãy dấu chấm. Chỉ những ô có cùng trạng thái với ô bạn bắt đầu mới bị ảnh hưởng, nên kéo
  một dãy chấm qua các ô đen của bạn sẽ không đụng tới chúng.
- **Nhấp chuột giữa** vào một ô để đưa nó về trạng thái chưa biết. Với chuột, kéo trong lúc
  nhấn giữ con lăn sẽ xóa cả một hình chữ nhật, bất kể bên trong có gì.
- **Xóa** (nút cục tẩy cạnh nút Hoàn tác) khiến nút chuột trái làm điều tương tự: nhấp vào một ô để xóa nó, hoặc kéo để xóa cả một hình chữ nhật. Nhấn lại để quay về tô đen.
- **Gợi ý** điền một ô, luôn là ô mà riêng một hàng hoặc một cột đã quyết định được — hoặc
  sửa một ô mâu thuẫn với đáp án. Câu đố vẫn tiếp tục, và dùng vài gợi ý thì chiến thắng,
  cùng sao của nó, vẫn thuộc về bạn.
- **Giải** tô toàn bộ bức tranh giúp bạn.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ.
- **Enter** tô hoặc xóa màu đen dưới con trỏ và **Space** đặt hoặc xóa dấu chấm.
- Giữ **Ctrl** khi di chuyển con trỏ để tô đen dọc đường đi, **Shift** để đặt dấu chấm,
  hoặc cả hai để xóa.
- Với chuột, **Shift + nhấp** xóa ô giống như nhấp chuột giữa.
- **E** là nút **Xóa**.

## Tham số

- **Chiều rộng** và **Chiều cao** của lưới. Các mức có sẵn từ 10×10 đến 30×30; lưới lớn
  hơn mất thêm chút thời gian để tạo.
`,R=e({default:()=>z}),z=`# Ngọc trai

Một lưới ô vuông, trong đó một số ô có ngọc trai đen hoặc trắng. Hãy vẽ một vòng khép kín
đi từ tâm ô này sang tâm ô khác, theo chiều ngang hoặc dọc, không bao giờ cắt nhau hay rẽ
nhánh. Vòng không cần đi qua mọi ô, nhưng phải đi qua mọi viên ngọc:

- tại **ngọc đen**, vòng phải rẽ, rồi đi thẳng qua cả hai ô nằm cạnh viên ngọc dọc theo
  vòng;
- tại **ngọc trắng**, vòng đi thẳng qua, và rẽ ở ít nhất một trong hai ô nằm cạnh viên
  ngọc dọc theo vòng.

Chỉ những ô mà vòng đi qua ngay trước và ngay sau viên ngọc mới được tính, chứ không phải
mọi ô chạm vào nó trên lưới.

Viên ngọc nào đã bị phạm luật sẽ có vầng sáng đỏ. Khi đã có một vòng khép kín bất kỳ, mọi
đoạn nằm ngoài vòng đó đều được vẽ màu đỏ, và bất kỳ ô nào có từ ba đoạn trở lên cũng vậy.

## Điều khiển

**Giải** vẽ toàn bộ vòng. Câu đố hoàn thành khi vòng là một mạch khép kín duy nhất và
không còn gì màu đỏ.

### Chuột và cảm ứng

- **Nhấp** vào một cạnh lưới (gần ranh giới giữa hai ô) để vẽ một đoạn vòng băng qua nó;
  nhấp lần nữa để xóa.
- **Kéo** qua một loạt ô để vẽ cả một dãy đoạn cùng lúc. Kéo dọc theo các đoạn đã có sẽ xóa
  chúng; một lần kéo bắt đầu trên các đoạn đã có rồi tiếp tục vào các ô trống thì sẽ xóa
  trước, rồi vẽ. Đi ngược lại qua một ô đã đi qua để rút ngắn đường trước khi thả tay; quay
  về ô xuất phát để khép kín vòng.
- **Nhấp chuột phải** vào một cạnh lưới để đặt một dấu gạch chéo nhỏ nghĩa là "không có
  đoạn ở đây"; không thể vẽ đoạn băng qua dấu gạch chéo cho đến khi nó được xóa.
  **Kéo chuột phải** qua một dải ô để đặt dấu gạch chéo trên mọi cạnh đi qua.
- **Gạch chéo** (nút dấu gạch chéo cạnh nút Hoàn tác) khiến một cú nhấp thường đặt hoặc gỡ một dấu gạch chéo, và một lần kéo đặt cả một dãy: giống như khi vẽ, lần kéo bắt đầu trên các dấu gạch chéo sẽ gỡ chúng trước, và nó bỏ qua mọi cạnh đã có đoạn vòng. Nhấn lại để quay về vẽ vòng.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ. **Ctrl+mũi tên** vẽ hoặc xóa đoạn ở phía đó của ô
  con trỏ, **Shift+mũi tên** đặt hoặc xóa dấu gạch chéo ở đó. **Enter** bắt đầu một lần
  kéo bằng bàn phím từ ô con trỏ: di chuyển bằng phím mũi tên và nhấn Enter lần nữa để xác
  nhận đường, hoặc **Space** để hủy.
- **X** là nút **Gạch chéo**; khi bật, kéo bằng bàn phím cũng đặt dấu gạch chéo.

## Tham số

- **Chiều rộng** và **Chiều cao** của lưới, tính theo ô (mỗi chiều ít nhất năm ô).
- **Độ khó**: câu đố _Dễ_ giải được bằng cách suy luận về từng viên ngọc và các ô ngay cạnh
  nó. Câu đố _Hóc búa_ còn đòi hỏi bạn nhận ra khi nào một đoạn sẽ khép một vòng nhỏ quá
  sớm, bỏ rơi những viên ngọc khác. (Lưới 5×5 Hóc búa được tạo như mức Dễ, giống bản gốc.)
- **Cho phép không giải được**: giữ mọi viên ngọc mà vòng hỗ trợ thay vì cắt bớt xuống một
  tập tối thiểu có lời giải duy nhất. Một tùy chọn gỡ lỗi kế thừa từ bản gốc.
`,B=e({default:()=>V}),V=`# Nhảy chốt

Một bàn chơi đầy chốt với một lỗ trống, hoặc vài lỗ trên bàn chơi ngẫu nhiên. Một chốt có thể nhảy theo chiều ngang hoặc dọc
qua một chốt bên cạnh để vào lỗ trống ngay phía sau nó; chốt bị nhảy qua sẽ bị lấy đi. Cứ
tiếp tục nhảy cho đến khi trên bàn chơi chỉ còn lại một chốt.

Đây là trò cờ nhảy một mình (peg solitaire) cổ điển. Bàn **Chữ thập** là bố cục kiểu Anh
quen thuộc, bàn **Bát giác** là bố cục kiểu châu Âu (bắt đầu với lỗ trống lệch khỏi tâm, vì
nếu bắt đầu từ tâm thì không thể hoàn thành), còn bàn **Ngẫu nhiên** là những hình dạng lạ
do máy tính tạo ra. Các vùng trống không có lỗ đơn giản là không thuộc bàn chơi.

Bạn không thể bị kẹt vĩnh viễn: nếu không còn nước nhảy nào mà vẫn còn hơn một chốt, ván
chơi kết thúc nhưng Hoàn tác đưa bạn quay lại bao xa tùy thích. Thanh trạng thái đếm số chốt
còn lại và số nước đã đi.

## Điều khiển

### Chuột và cảm ứng

- **Kéo** một chốt và thả vào một lỗ trống cách đúng hai ô, theo đường thẳng qua một chốt
  khác. Thả ở bất kỳ chỗ nào khác thì chốt sẽ về chỗ cũ.
- Hoặc **nhấp** vào một chốt để nhấc nó lên (nó chuyển sang màu cam và các lỗ nó có thể
  nhảy tới được đánh dấu), rồi nhấp vào lỗ muốn nhảy tới. Nhấp lại vào chính chốt đó để
  đặt nó xuống.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ quanh bàn chơi.
- **Enter** hoặc **Space** trên một chốt sẽ nhấc nó lên; sau đó một phím mũi tên cho nó nhảy
  theo hướng đó, nếu nước đó hợp lệ, và nhấn **Enter** lần nữa để đặt nó xuống.

## Tham số

- **Chiều rộng** và **Chiều cao** của bàn chơi, mỗi chiều ít nhất 4.
- **Kiểu bàn chơi**: _Chữ thập_ và _Bát giác_ là các bố cục truyền thống và chỉ có ở kích
  thước 7×7. _Ngẫu nhiên_ tạo ra một hình dạng bàn chơi khác nhau mỗi lần, luôn có thể rút
  xuống còn một chốt vì nó được dựng bằng cách chạy ngược các nước nhảy từ một chốt.
`,H=e({default:()=>U}),U=`# Tầm nhìn

Một số ô của lưới có ghi số. Hãy tô đen các ô sao cho bốn điều sau cùng đúng:

- không ô có số nào bị tô đen;
- không có hai ô đen nào chạm nhau qua cạnh (chạm góc thì được);
- các ô trắng tạo thành một vùng liền mạch duy nhất, nối với nhau qua cạnh;
- mỗi con số đếm số ô trắng mà ô của nó nhìn thấy: chính nó, cộng mọi ô trên đường thẳng
  lên, xuống, trái và phải cho đến khi bị một ô đen hoặc mép lưới chắn lại.

Đây là câu đố _Kurodoko_ của Nikoli, còn được gọi là _Kuromasu_ hay _Where is Black Cells_.
Một con số đã nhìn thấy đủ ô thì có một ô đen ngay sau mỗi dải mà nó nhìn thấy; một con số
sẽ nhìn thấy quá nhiều nếu một ô chưa biết đơn lẻ là trắng thì ô đó phải là đen. Tô đen một
ô là cầu nối duy nhất giữa hai nhóm ô trắng thì không bao giờ đúng. Mọi câu đố đều có thể
hoàn thành bằng những suy luận như vậy; không cần phải đoán.

Lỗi sai hiện màu đỏ: các ô đen chạm nhau có khung đỏ quanh nhóm, các ô trắng bị tách khỏi
vùng chính có viền đỏ, và một con số chuyển đỏ khi không còn nhìn thấy đủ ô hoặc chắc chắn
đã nhìn thấy quá nhiều. Câu đố hoàn thành khi không có luật nào bị phạm; không cần đánh dấu
chấm các ô trắng.

## Điều khiển

### Chuột và cảm ứng

- **Nhấp** vào một ô để tô đen nó. Nhấp lần nữa để biến nó thành dấu chấm (ô bạn biết chắc
  là trắng), và thêm lần nữa để xóa.
- **Nhấp chuột phải** xoay vòng theo chiều ngược lại: chấm, rồi đen, rồi xóa.
- **Kéo** để tô nhiều ô trong một lần, và **kéo chuột phải** để quét chúng theo chiều ngược
  lại. Chỉ những ô ban đầu giống ô đầu tiên mới bị ảnh hưởng, nên quét một dãy chấm sẽ
  không đụng tới các ô đen của bạn.
- **Xóa** (nút cục tẩy cạnh nút Hoàn tác) khiến một cú nhấp xóa ô thay vào đó, và một lần kéo xóa mọi ô đen và dấu chấm nó đi qua, bất kể là loại nào. Nhấn lại để quay về tô.
- **Gợi ý** điền một ô suy ra được từ những gì đã có trên bàn chơi — hoặc sửa một ô mâu
  thuẫn với đáp án. Câu đố vẫn tiếp tục, và dùng vài gợi ý thì chiến thắng, cùng sao của
  nó, vẫn thuộc về bạn.
- **Giải** điền toàn bộ lưới, đánh dấu chấm mọi ô trắng.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ quanh lưới.
- **Enter** có tác dụng như nhấp chuột trái vào ô dưới con trỏ và **Space** như
  nhấp chuột phải.
- **E** là nút **Xóa** và **H** là nút **Gợi ý**.

## Tham số

- **Chiều rộng** và **Chiều cao** của lưới. Các mức có sẵn từ 9×6 đến 16×11; có thể tạo
  lưới tới 30×30, dù những lưới tí hon chỉ một hai ô thì không có câu đố nào tử tế.
`,W=e({default:()=>G}),G=`# Hình chữ nhật

Một số ô của lưới có ghi số. Hãy chia toàn bộ lưới thành các hình chữ nhật sao cho mỗi hình
chữ nhật chứa đúng một con số, và con số đó là diện tích của hình (chiều rộng nhân chiều
cao). Chẳng hạn, số 6 nằm trong một khối 1×6, 2×3, 3×2 hoặc 6×1; khối nào, và con số nằm ở
đâu bên trong nó, là việc bạn phải suy ra từ các ô xung quanh.

Câu đố được tạo ngẫu nhiên, và theo mặc định các con số được đặt sao cho chỉ có một cách
chia lưới là đúng. Câu đố gốc đến từ tạp chí Nikoli của Nhật Bản, nơi nó được gọi là
Shikaku.

## Điều khiển

### Chuột và cảm ứng

- **Kéo** qua một vùng để vẽ hình chữ nhật bao quanh nó: đường viền được vẽ và mọi đường bên
  trong bị xóa. Kéo dọc theo một đường lưới thì chỉ vẽ đường đó.
- **Nhấp** vào một đường lưới để thêm hoặc xóa riêng cạnh đó.
- **Kéo chuột phải** qua một vùng để xóa các đường bên trong nó mà vẫn giữ nguyên đường
  viền. **Nhấp chuột phải** vào một đường lưới sẽ bật hoặc tắt nó, giống như nhấp thường.
- **Xóa** (nút cục tẩy cạnh nút Hoàn tác) khiến cả thao tác kéo thường cũng xóa: kéo qua một vùng để xóa các đường bên trong, hoặc nhấp vào một đường lưới để gỡ nó. Khi bật, nhấp chuột không bao giờ thêm đường. Nhấn lại để quay về vẽ.
- **Giải** điền toàn bộ cách chia giúp bạn.

Trong khi bạn kéo, hình chữ nhật sắp vẽ được viền lại và kích thước của nó hiện trên thanh
trạng thái. Một hình chữ nhật hoàn chỉnh đúng kích thước sẽ được tô bóng. Một hình chữ nhật
khép kín không bao giờ có thể đúng sẽ bị đánh dấu: con số của nó chuyển đỏ nếu kích thước
sai, và nó bị gạch chéo nếu không chứa con số nào. Câu đố hoàn thành khi mọi ô đều nằm
trong một hình chữ nhật đúng.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ.
- **Enter** bắt đầu kéo một hình chữ nhật từ con trỏ; di chuyển con trỏ tới góc đối diện
  và nhấn **Enter** lần nữa để vẽ nó.
- **Space** hoạt động tương tự nhưng xóa phần bên trong hình chữ nhật.
- **E** là nút **Xóa**.

## Tham số

- **Chiều rộng** và **Chiều cao** của lưới. Các mức có sẵn từ 7×7 đến 19×19.
- **Hệ số giãn** — tạo một lưới nhỏ hơn rồi kéo giãn tới kích thước yêu cầu, để câu đố có
  ít hình chữ nhật hơn nhưng lớn hơn. 0 (mặc định) nghĩa là không kéo giãn; 0.5 khiến lưới
  ban đầu bằng hai phần ba kích thước cuối cùng theo mỗi chiều. Giá trị lớn chỉ để lại vài
  hình chữ nhật và khiến câu đố quá dễ.
- **Đảm bảo lời giải duy nhất** — thường bật. Tắt đi thì các con số được đặt ở bất kỳ đâu
  trong hình chữ nhật của chúng, nhanh hơn và có thể cho ra câu đố nhiều đáp án; khi đó
  mọi cách chia hợp lệ đều được tính là đã giải.
`,se=e({default:()=>K}),K=`# Cùng màu

Bàn chơi đầy các ô màu. Hãy chọn một nhóm từ hai ô cùng màu trở lên chạm nhau qua cạnh và
xóa nó đi; các ô phía trên chỗ trống sẽ rơi xuống, và khi một cột trống hẳn thì các cột bên
phải sẽ trượt sang để lấp lại. Dọn sạch cả bàn chơi để thắng. Nếu còn ô sót lại mà không có
hai ô nào chạm nhau cùng màu, bạn không thể làm gì thêm — hãy hoàn tác và thử thứ tự khác.

Nhóm lớn đáng giá hơn nhiều so với nhóm nhỏ: xóa _n_ ô được (_n_ − 2)² điểm theo cách tính
mặc định, nên một cặp chẳng được điểm nào, ba ô được một điểm, mười ô được 64. Thanh trạng
thái hiện điểm của bạn và, khi đang chọn một nhóm, nhóm đó có bao nhiêu ô và sẽ được bao
nhiêu điểm.

Mọi bàn chơi được tạo ra (trừ khi bạn tắt tùy chọn) đều được dựng sao cho _có thể_ dọn sạch
hoàn toàn — dù tìm được thứ tự vừa dọn sạch vừa ghi nhiều điểm là việc của bạn.

Không có nút Giải: máy tính biết bàn chơi có thể dọn sạch, nhưng sẽ không chỉ cho bạn cách.

## Điều khiển

### Chuột và cảm ứng

- **Nhấp** vào một ô để chọn cả nhóm chứa nó; nhóm được vẽ sáng hơn với đường viền đậm.
  **Nhấp lại vào nhóm đang chọn** để xóa nó. Nhấp vào chỗ khác thì sẽ chuyển vùng chọn.
- **Nhấp chuột phải** vào nhóm đang chọn để bỏ chọn.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ quanh bàn chơi (vòng lại ở các mép).
- **Enter** chọn nhóm dưới con trỏ, và nhấn lần nữa để xóa nhóm đó.
- **Space** trên nhóm đang chọn sẽ bỏ chọn nó.

## Tham số

- **Chiều rộng** và **Chiều cao** của bàn chơi.
- **Số màu**, từ 3 đến 9 (được phép chọn 2 khi không đảm bảo giải được). Càng nhiều màu
  thì nhóm càng nhỏ và bàn chơi càng khó.
- **Cách tính điểm**: _(n−2)²_, mặc định, hoặc _(n−1)²_, cho điểm cả các cặp.
- **Đảm bảo giải được**: khi đánh dấu, bàn chơi được tạo ngược từ một bàn trống để có ít
  nhất một chuỗi nước dọn sạch được. Bỏ đánh dấu để có bàn chơi ngẫu nhiên thông thường,
  tạo nhanh hơn và thường có vùng lớn hơn, nhưng có thể không dọn sạch được.
`,ce=e({default:()=>le}),le=`# Biển chỉ đường

Mỗi ô mang một mũi tên, và một vài ô mang con số. Hãy nối các ô thành một đường đi
duy nhất đánh số từ 1 đến N (N là số ô) sao cho ô tiếp theo của mỗi ô nằm đâu đó dọc
theo mũi tên của nó: ô số 1 chỉ về phía ô số 2, ô số 2 chỉ về phía ô số 3, và cứ thế.
Ô tiếp theo có thể cách xa bao nhiêu cũng được theo hướng mũi tên, không chỉ là ô kề
bên. Ô cuối cùng, được đánh dấu ngôi sao, không chỉ về đâu cả.

Số đầu tiên và số cuối cùng luôn được cho sẵn, cùng đủ số khác để đường đi là duy nhất.
Mỗi câu đố có đúng một lời giải và có thể tìm ra chỉ bằng suy luận.

Lỗi sai hiện màu đỏ: hai ô cùng một số, một số mà ô tiếp theo không nằm dọc theo mũi tên
của nó, hoặc một chuỗi chạy vượt quá số đã cho. Câu đố hoàn thành khi các số từ 1 đến N
chạy qua mọi ô và không còn chỗ nào màu đỏ.

## Điều khiển

### Chuột và cảm ứng

- **Kéo** từ một ô tới một ô dọc theo mũi tên của nó để biến ô thứ hai thành ô tiếp theo
  của ô thứ nhất. **Kéo chuột phải** thì đi theo chiều ngược lại: từ một ô tới ô cần
  đứng trước nó.
- Khi hai ô được nối có chứa một con số, con số đó lan ra cả chuỗi và hiện màu xanh dương.
  Chuỗi chưa có số nào được ghi bằng một chữ cái kèm độ lệch (\`a\`, \`a+1\`, \`a+2\`, ...);
  ngay khi chạm vào một ô có số, các chữ cái sẽ chuyển thành số. Nối một chuỗi vào ô đã
  được nối sẽ thay thế liên kết cũ.
- Mỗi ô vẫn cần ô đứng trước sẽ có một chấm nhỏ ở góc dưới bên trái, và mũi tên sẽ mờ đi
  khi ô của nó đã có ô tiếp theo. Vậy việc cần làm luôn là nối một mũi tên đậm vào một ô
  có chấm.
- **Nhấp chuột phải** vào một ô để xóa cả hai liên kết của nó. **Kéo** một ô ra khỏi bàn
  chơi cũng có tác dụng như vậy, còn **kéo chuột phải** nó ra khỏi bàn chơi sẽ phá vỡ cả
  chuỗi của nó.
- **Tách** (nút mắt xích đứt cạnh nút Hoàn tác) khiến một cú nhấp vào ô phá vỡ cả chuỗi của nó, mọi liên kết trong chuỗi, và kéo một ô ra khỏi bàn chơi cũng vậy. Kéo từ ô này sang ô khác vẫn nối chúng như cũ. Nhấn lại để tắt.
- **Giải** điền toàn bộ đường đi.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ.
- **Enter** trên một ô bắt đầu một liên kết từ ô đó; di chuyển con trỏ tới ô tiếp theo
  và nhấn **Enter** lần nữa để nối (nhấn trên cùng ô đó để hủy).
- **Space** hoặc **X** xóa các liên kết của ô dưới con trỏ; **Shift + X** phá vỡ cả chuỗi
  của nó.
- **B** là nút **Tách**.

## Tham số

- **Chiều rộng** và **chiều cao** của lưới, từ 2 đến 12 ô (2×2 quá nhỏ để chơi được).
- **Bắt đầu và kết thúc ở góc**: khi bật, số 1 luôn ở ô trên cùng bên trái và số N ở ô
  dưới cùng bên phải. Nếu không, hai đầu được đặt ngẫu nhiên, dù cả hai vẫn được cho sẵn.
`,ue=e({default:()=>de}),de=`# Loại số

Mỗi ô của lưới chứa một con số. Hãy tô đen một số ô (che đi con số của chúng) sao cho
cả ba điều sau cùng đúng:

- không số nào xuất hiện quá một lần giữa các ô trắng của bất kỳ hàng hay cột nào;
- không có hai ô đen nào chạm nhau theo cạnh (chạm góc thì được);
- các ô trắng tạo thành một vùng liền nhau duy nhất, nối với nhau theo cạnh.

Đây là trò _Hitori_ của Nikoli. Một nước mở đầu tốt là tìm hai số bằng nhau cách nhau
một ô: một trong hai số phải đen, nên ô ở giữa phải trắng. Hai số bằng nhau nằm cạnh nhau
nghĩa là mọi bản sao khác của số đó trên hàng hoặc cột của chúng đều đen.

Lỗi sai hiện màu đỏ: các ô đen chạm nhau có khung đỏ quanh nhóm, các ô trắng bị tách khỏi
vùng chính có viền đỏ, và hai ô được khoanh tròn cùng một số trên cùng hàng hoặc cột được
vẽ màu đỏ.

Câu đố hoàn thành khi không còn quy tắc nào bị vi phạm; không cần khoanh tròn các ô trắng.

## Điều khiển

### Chuột và cảm ứng

- **Nhấp** vào một ô để tô đen nó; nhấp lần nữa để khôi phục.
- **Nhấp chuột phải** vẽ một vòng tròn quanh con số để ghi nhận rằng nó chắc chắn trắng;
  nhấp chuột phải lần nữa để bỏ vòng tròn. Nút chuột nào cũng xóa được dấu mà ô đang có.
- **Giải** điền toàn bộ lưới, khoanh tròn mọi ô trắng.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ quanh lưới (vòng lại khi tới mép).
- **Enter** tô đen hoặc khôi phục ô dưới con trỏ, còn **Space** khoanh tròn hoặc bỏ
  khoanh tròn nó.

## Tham số

- **Chiều rộng** và **chiều cao** của lưới, từ 2 đến 20 đối với câu đố được tạo tự động.
- **Độ khó**: câu đố _Dễ_ chỉ cần các lập luận trực tiếp — một ô đen buộc các ô kề bên
  phải trắng, một số được khoanh tròn buộc các số trùng với nó phải đen, các mẫu cặp số
  cách một ô và cặp số nằm cạnh nhau, một ô trắng chỉ có một lối ra, và các mẫu nhỏ ở góc.
  Câu đố _Hóc búa_ còn đòi hỏi bạn nhận ra khi nào tô đen một ô sẽ cắt vùng trắng làm đôi,
  và dùng các cặp của cặp lệch nhau một ô. Mỗi câu đố có đúng một lời giải.
`,fe=e({default:()=>pe}),pe=`# Mười sáu

Một câu đố trượt không có ô trống. Mỗi ô chứa một mảnh có số, và thay vì trượt từng mảnh
một, bạn trượt cả một hàng hoặc một cột đi một bước. Mảnh bị đẩy ra khỏi mép sẽ quay lại
ngay ở đầu bên kia của cùng hàng hoặc cột đó, như thể lưới được cuộn quanh một chiếc bánh
donut. Hãy xếp các mảnh để chúng đếm tăng dần từ 1 ở góc trên bên trái, từ trái sang phải
rồi lần lượt từng hàng.

## Điều khiển

### Chuột và cảm ứng

- **Nhấp** vào một trong các mũi tên quanh mép để trượt hàng hoặc cột đó một bước theo
  hướng mũi tên chỉ. **Nhấp chuột phải** vào một mũi tên để trượt theo chiều ngược lại.
- **Giải** chỉ đơn giản thay lưới bằng lưới đã xếp đúng thứ tự. Nó không chỉ cho bạn cách
  đi, nhưng cho bạn một bàn chơi sạch để thử các bước biến đổi.

### Bàn phím (Keyboard)

- **Phím mũi tên** đưa vùng làm nổi bật đi vòng quanh các mũi tên ở mép.
- **Enter** trượt hàng hoặc cột đang được làm nổi bật theo hướng mũi tên của nó, còn
  **Space** trượt theo chiều ngược lại.

## Tham số

- **Chiều rộng** và **chiều cao** của lưới. Trên lưới có cả hai cạnh đều lẻ, chỉ một nửa
  số cách sắp xếp là đạt tới được, nên trình tạo chỉ đưa ra những cách xếp giải được.
- **Số nước xáo trộn**: để 0 cho một cách sắp xếp hoàn toàn ngẫu nhiên, hoặc đặt một con
  số để xáo lưới đã xếp đúng bằng đúng bấy nhiêu lần trượt đơn. Khi đó mục tiêu là suy ra
  những lần trượt đã thực hiện và đảo ngược chúng trong cùng số nước; bạn yêu cầu càng
  nhiều nước xáo trộn thì càng có khả năng tồn tại lời giải ngắn hơn.
`,me=e({default:()=>he}),he=`# Đường chéo

Một lưới các ô trống với các con số trong vòng tròn ở một số góc. Hãy vẽ một đường chéo
qua mỗi ô, nghiêng về bên nào cũng được, sao cho:

- mỗi con số trong vòng tròn có đúng bấy nhiêu đường chạm vào điểm góc của nó (số 4 nằm
  giữa một hình chữ thập, số 0 có mọi đường gần đó nghiêng ra xa);
- các đường không bao giờ nối lại thành một vòng kín.

Con số nào đã có quá nhiều đường, hoặc không thể có đủ đường nữa, sẽ chuyển đỏ, và mọi
đường thuộc một vòng kín cũng vậy. Câu đố hoàn thành khi mọi ô đều có đường và không còn
gì màu đỏ.

## Điều khiển

### Chuột và cảm ứng

- **Nhấp** vào một ô để vẽ \`\\\` trong đó; nhấp lần nữa để đổi thành \`/\`, và thêm một lần
  nữa để xóa.
- **Nhấp chuột phải** đổi theo chiều ngược lại: \`/\`, rồi \`\\\`, rồi trống. Vậy chỉ cần một
  nút cũng đặt được ô theo cả hai hướng.
- **Giải** điền toàn bộ lưới.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ quanh lưới.
- **Enter** đổi ô dưới con trỏ như nhấp chuột trái, còn **Space** như nhấp chuột phải.

## Tham số

- **Chiều rộng** và **chiều cao** của lưới, tính bằng ô.
- **Độ khó**: câu đố _Dễ_ có thể giải từng ô một — một con số đã thỏa hoặc cần tất cả các
  ô còn lại, và những ô mà một trong hai đường sẽ khép kín một vòng. Câu đố _Khó_ còn cần
  suy luận về các cặp ô phải nghiêng cùng một hướng ngay cả trước khi bạn biết đó là hướng
  nào, và về những vùng mà một đường sẽ cô lập khỏi mép lưới. Không bao giờ phải đoán mò;
  mỗi câu đố có đúng một lời giải.
`,ge=e({default:()=>_e}),_e=`# Sudoku

Điền chữ số vào lưới vuông sao cho mỗi hàng, mỗi cột và mỗi khối có viền đậm chứa mỗi
chữ số đúng một lần. Một số ô được cho sẵn làm manh mối; phần còn lại là việc của bạn.
Câu đố 3×3 thông thường chính là Sudoku quen thuộc, nhưng các khối cũng có thể là hình
chữ nhật (câu đố 2×3 có sáu khối 3×2), và lưới có thể lớn tới 16×16, khi đó các chữ cái
a, b, c… thay cho các chữ số lớn hơn 9.

Có thể bật ba biến thể:

- **X**: hai đường chéo chính, được tô nhạt, cũng phải chứa đủ mọi chữ số.
- **Ghép hình**: các khối có hình dạng bất thường, khác nhau ở mỗi câu đố.
- **Killer**: không có chữ số manh mối nào. Thay vào đó lưới được chia thành các "lồng"
  viền nét đứt, mỗi lồng ghi tổng các chữ số bên trong nó. Không chữ số nào được xuất hiện
  hai lần trong một lồng.

Mỗi câu đố có đúng một lời giải, và luôn có thể đạt tới chỉ bằng suy luận ở độ khó bạn
đã chọn.

## Điều khiển

Chữ số nào trùng với một bản sao khác trong hàng, cột, khối, đường chéo hoặc lồng của nó
sẽ hiện màu đỏ, lồng có tổng các chữ số không khớp cũng vậy. **Gợi ý** điền một ô — ô dễ
nhất còn trống, hoặc chữ số đầu tiên mâu thuẫn với đáp án — và để phần còn lại cho bạn;
câu đố vẫn tiếp tục, và dùng vài gợi ý thì chiến thắng cùng sao của nó vẫn là của bạn.
**Giải** điền toàn bộ lời giải và kết thúc câu đố.

### Chuột và cảm ứng

- **Nhấp chuột trái** vào một ô trống để chọn nó, rồi dùng bàn phím số trên màn hình để điền
  một chữ số (các phím chữ cái là các chữ số lớn hơn 9). Nhấp lại vào ô đang chọn sẽ bỏ chọn
  nó.
- **⌫** trên bàn phím số xóa trống lại ô đang chọn, còn **✎** bật chế độ ghi chú bút chì,
  để những gì bạn chọn tiếp theo được nhập thành ghi chú nhỏ thay vì đáp án.
- **Nhấp chuột phải** vào một ô để chọn nó cho **ghi chú bút chì** ngay lập tức. Ghi chú
  bút chì chỉ để giúp bạn suy nghĩ; trò chơi không để ý đến chúng, và điền một chữ số sẽ
  xóa chúng đi.
- **Ghi chú** trong menu tạm dừng điền đầy đủ ghi chú bút chì vào mọi ô trống, dành cho
  những ai thích bắt đầu từ mọi khả năng rồi gạch bớt dần.
- **Tô sáng** (nút kính lúp cạnh nút Hoàn tác) làm nổi bật mọi ô chứa cùng chữ số với ô bạn nhấp gần nhất, kể cả các ô gợi ý, và in đậm chữ số đó giữa các ghi chú bút chì. Nhấn lại để tắt.

### Bàn phím (Keyboard)

- **Gõ một chữ số** (hoặc một chữ cái cho chữ số lớn hơn 9) để điền vào ô đang chọn.
- **Space** hoặc **Backspace** xóa ô đang chọn (chữ số hoặc toàn bộ ghi chú bút chì của nó).
- **Phím mũi tên** di chuyển con trỏ bàn phím. **Enter** chuyển con trỏ giữa chế độ nhập
  thường và nhập ghi chú bút chì, và chữ số gõ vào sẽ đi vào ô dưới con trỏ.
- **M** là nút **Ghi chú** và **L** là nút **Tô sáng**.

## Tham số

- **Số cột** và **số hàng của khối con**: lưới lớn bằng tích của hai số này, và mỗi khối
  rộng bằng số hàng và cao bằng số cột. Ở chế độ ghép hình, tích này đơn giản là kích
  thước lưới.
- **X**, **Ghép hình** và **Killer** bật các biến thể mô tả ở trên. Câu đố Killer bị giới
  hạn ở lưới có tối đa chín chữ số.
- **Đối xứng**: cách mẫu manh mối tự phản chiếu. Đối xứng nhiều hơn trông đẹp hơn nhưng
  thường để lại nhiều manh mối hơn mức thực sự cần.
- **Độ khó**: kiểu suy luận khó nhất mà câu đố sẽ đòi hỏi. _Rất dễ_ và _Dễ_ luôn có ô nào đó
  điền được trực tiếp; _Vừa_ cần bạn suy luận xem một chữ số có thể nằm ở đâu trong một khối
  và một hàng hoặc cột; _Khó_ cần các tập ô cùng nhau chiếm giữ một tập chữ số; _Chuyên gia_
  thêm các chuỗi suy diễn bắt buộc; còn câu đố _Cực khó_ không thể hoàn thành nếu không đoán
  rồi quay lui. Câu đố khó mất nhiều thời gian hơn để tạo.
`,ve=e({default:()=>ye}),ye=`# Cắm lều

Lưới là một khu cắm trại: một số ô có cây, phần còn lại là đất trống. Hãy dựng lều trên
các ô trống sao cho:

- số lều bằng đúng số cây;
- mỗi cái cây có thể ghép với một chiếc lều của riêng nó ở ô ngay bên cạnh (trên, dưới,
  trái hoặc phải — không chéo). Một chiếc lều có thể tình cờ đứng cạnh cả những cây khác,
  nhưng mỗi lều thuộc về một cây và mỗi cây có một lều;
- không có hai lều nào chạm nhau, kể cả chạm góc;
- các con số dọc theo mép phải và mép dưới cho biết số lều trong mỗi hàng và cột.

Manh mối chỉ là các con số đếm, nên cả câu đố là việc suy ra lều phải nằm ở đâu. Mọi câu
đố ở đây đều giải được chỉ bằng suy luận, không cần đoán mò.

## Điều khiển

Các lều chạm nhau hiện màu đỏ với một dấu trên cạnh hoặc góc chung, và cũng vậy với nhóm
lều có quá ít cây giữa chúng, hoặc nhóm cây không còn đủ chỗ cho tất cả lều của chúng.
Một con số chuyển xám khi hàng hoặc cột của nó có đúng số lều và chuyển đỏ khi không thể
thỏa được nữa. **Giải** đặt tất cả lều giúp bạn.

### Chuột và cảm ứng

- **Nhấp** vào một ô trống để dựng lều ở đó; nhấp lại vào lều để gỡ nó.
- **Nhấp chuột phải** vào một ô trống để đánh dấu là cỏ, nghĩa là bạn chắc chắn không có
  lều ở đó; nhấp chuột phải lần nữa để xóa. Nhấp hay nhấp chuột phải đều xóa được một ô
  đang có thứ gì đó.
- **Kéo chuột phải** dọc theo một hàng hoặc cột để biến mọi ô trống bạn đi qua thành cỏ
  một lượt — rất tiện để hoàn tất một hàng hoặc cột khi đã đặt đủ lều. Lều và các dấu có
  sẵn được giữ nguyên.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ.
- **Enter** dựng hoặc gỡ lều dưới con trỏ.
- **Space** đánh dấu hoặc xóa cỏ dưới con trỏ.

## Tham số

- **Chiều rộng** và **chiều cao** của lưới, từ 4 đến 20 ô.
- **Độ khó**: câu đố _Dễ_ chịu thua trước việc đếm và xem xét mỗi cây và mỗi lều cần gì.
  Câu đố _Hóc búa_ còn đòi hỏi bạn cân nhắc cách các vị trí có thể đặt ở một hàng hoặc
  cột ràng buộc hàng hoặc cột bên cạnh, và nghĩ xem những ô nào các cây có thể dùng chung.
`,be=e({default:()=>xe}),xe=`# Tòa tháp

Mỗi ô của lưới có một tòa tháp, với chiều cao từ 1 đến kích thước của lưới. Mỗi hàng và
mỗi cột phải chứa mọi chiều cao đúng một lần. Các con số quanh mép cho biết bạn sẽ nhìn
thấy bao nhiêu tòa tháp khi nhìn vào hàng hoặc cột đó từ phía ấy: một tòa tháp che khuất
mọi tòa tháp thấp hơn phía sau nó. Manh mối bằng kích thước lưới nghĩa là chiều cao tăng
dần suốt cả hàng hoặc cột; manh mối 1 nghĩa là tòa tháp cao nhất đứng ngay ở mép đó.

Câu đố lớn hơn và khó hơn bắt đầu với một số tòa tháp đã xây sẵn và bỏ bớt một số manh
mối ở mép. Chữ số trùng với chữ số khác trong hàng hoặc cột của nó, và manh mối mà các tòa
tháp đã xây không còn thỏa được nữa, sẽ hiện màu đỏ. Câu đố này còn được biết đến rộng rãi
hơn với tên Skyscrapers (nhà chọc trời).

## Điều khiển

Các tòa tháp cho sẵn không thể thay đổi, và **Giải** điền đáp án.

### Chuột và cảm ứng

- **Nhấp chuột trái** vào một ô để chọn nó, rồi dùng các phím trên màn hình để xây một
  tòa tháp có chiều cao đó. **⌫** trên bàn phím số xóa trống lại ô.
- **✎** trên bàn phím số bật chế độ **ghi chú bút chì**: những gì bạn chọn sau đó được
  nhập thành ghi chú nhỏ, ô vẫn được chọn để bạn thêm nhiều ghi chú, và chọn lại cùng chữ
  số sẽ xóa nó đi. Điền một chữ số thật sẽ xóa sạch ghi chú bút chì trong ô đó.
- **Nhấp chuột phải** vào một ô để chọn nó cho ghi chú bút chì ngay lập tức.
- **Ghi chú** trong menu tạm dừng điền đầy đủ ghi chú bút chì vào mọi ô trống.
- **Tô sáng** (nút kính lúp cạnh nút Hoàn tác) làm nổi bật mọi ô có cùng chiều cao với ô bạn nhấp gần nhất, và in đậm chiều cao đó giữa các ghi chú bút chì. Nhấn lại để tắt.

### Bàn phím (Keyboard)

- **Gõ một chữ số** để xây một tòa tháp có chiều cao đó trong ô đang chọn. **Space** hoặc
  **Backspace** xóa nó.
- **Phím mũi tên** di chuyển con trỏ bàn phím. **Enter** chuyển nó giữa chế độ chữ số và
  ghi chú bút chì; chữ số được gõ vào ô đang làm nổi bật và con trỏ đứng yên.
- **M** là nút **Ghi chú** và **L** là nút **Tô sáng**.

## Tham số

- **Kích thước lưới** — từ 3 đến 9. Tháp được nhập bằng một chữ số, nên giới hạn là 9.
- **Độ khó** — câu đố Dễ chỉ cần các hệ quả trực tiếp của mỗi manh mối và của quy tắc hàng
  và cột. Câu đố Khó đòi hỏi bạn xét mọi cách sắp xếp mà một manh mối cho phép và nhận ra
  các tập ô cùng chia sẻ vài khả năng. Chuyên gia thêm suy luận tập hợp khó hơn và các chuỗi
  suy diễn bắt buộc, còn câu đố Cực khó không thể hoàn thành nếu không thử và sai đôi chút,
  dù lời giải vẫn là duy nhất.
`,Se=e({default:()=>Ce}),Ce=`# Đường ray

Một tuyến đường ray đi vào lưới từ bên trái và đi ra ở dưới cùng; cả hai đầu được vẽ là
những thanh ray chạy ra khỏi bàn chơi. Hãy hoàn thành tuyến đường giữa hai đầu đó. Đường
ray là một tuyến duy nhất không rẽ nhánh, không vòng và không giao nhau, chỉ gồm các đoạn
thẳng và đoạn cong một phần tư vòng, nên mỗi ô nó đi qua có đúng hai thanh ray đi ra. Một
vài đoạn đã được đặt sẵn trên các ô tô bóng và không thể thay đổi. Con số phía trên mỗi
cột và bên cạnh mỗi hàng cho biết đường ray hoàn chỉnh đi qua bao nhiêu ô của hàng hoặc
cột đó.

Con số chuyển xám khi hàng hoặc cột của nó có đúng số ô đường ray, và chuyển đỏ khi hàng
hoặc cột đó không thể thỏa được nữa: quá nhiều ô đường ray, hoặc quá nhiều ô bị gạch bỏ
đến mức không còn đủ chỗ. Những ô mà các thanh ray gặp nhau sai cách (ba thanh ray vào một
ô, một vòng kín, hoặc đường ray còn thừa sau khi lối vào và lối ra đã được nối) cũng được
vẽ màu đỏ.

## Điều khiển

**Giải** đặt toàn bộ đường ray, xóa mọi dấu của bạn mâu thuẫn với nó. Câu đố hoàn thành
khi một đường ray liền mạch nối lối vào với lối ra và mọi con số đều được thỏa.

### Chuột và cảm ứng

- **Kéo** qua một dải ô kề nhau để đặt ray giữa chúng. Đường kéo có thể rẽ góc; một lần
  kéo chỉ đi theo những thanh ray đã có sẵn thì sẽ gỡ chúng đi.
- **Nhấp** gần cạnh của một ô để thêm hoặc bỏ một thanh ray qua cạnh đó. Nhấp vào giữa
  một ô để đánh dấu "đường ray đi qua đây" mà không nói rõ qua những cạnh nào — tiện cho
  việc đếm — và nhấp lần nữa để xóa dấu.
- **Nhấp chuột phải** gần một cạnh để vẽ một vạch ngắn nghĩa là "không có ray ở đây";
  nhấp chuột phải vào giữa một ô để gạch bỏ cả ô. **Kéo chuột phải** dọc theo một hàng
  hoặc cột để gạch bỏ (hoặc bỏ gạch) cả một dải ô cùng lúc.
- **Xóa** (nút cục tẩy cạnh nút Hoàn tác) khiến một cú nhấp hoặc một lần kéo xóa sạch ô: mọi ô nó chạm vào đều mất ray, vạch "không có ray" và dấu hoặc dấu gạch chéo. Các đoạn ray cho sẵn vẫn giữ nguyên. Nhấn lại để quay về đặt ray.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ, dừng trên các ô và trên các cạnh giữa chúng.
  **Enter** có tác dụng như nhấp tại con trỏ và **Space** như nhấp chuột phải.
- **E** là nút **Xóa**.

## Tham số

- **Chiều rộng** và **chiều cao** của lưới, mỗi chiều ít nhất là bốn.
- **Độ khó**: câu đố _Dễ_ chịu thua khi bạn xem xét từng ô hoặc từng hàng, cột một. Câu
  đố _Hóc búa_ còn đòi hỏi bạn nghĩ xem ô đường ray cuối cùng của một hàng hoặc cột có thể
  nằm ở đâu, và về những đầu ray còn dở phải được nối tiếp dọc theo hoặc cắt ngang một
  hàng hoặc cột. Mỗi câu đố có đúng một lời giải.
- **Không cho hai manh mối 1 liền nhau**: khi bật (mặc định), không có hai hàng hoặc cột
  kề nhau nào cùng được đếm là 1, và cột lối vào lẫn hàng lối ra cũng không. Điều này giúp
  đường ray không chạy thành những đoạn thẳng dài nhàm chán dọc theo mép.
`,we=e({default:()=>Te}),Te=`# Xoay ô

Một lưới mảnh có số đã bị xáo trộn bằng cách xoay các khối mảnh vuông. Hãy xoay chúng
lại cho đến khi các con số đọc theo thứ tự từ trái sang phải và từ trên xuống dưới. Trong
trò chơi cơ bản, mỗi nước xoay một khối 2×2 đi một phần tư vòng quanh điểm bốn mảnh của
nó gặp nhau; các thiết lập lớn hơn xoay khối 3×3 hoặc lớn hơn nữa.

Trong các biến thể **có hướng**, mỗi mảnh mang một hình tam giác, và câu đố chỉ được tính
là hoàn thành khi mọi tam giác đều chỉ lên trên. Trong biến thể **chỉ theo hàng**, các
mảnh mang số hàng của chúng, nên mọi số 1 chỉ cần về hàng đầu tiên, số 2 về hàng thứ hai,
và cứ thế.

## Điều khiển

**Giải** đưa mọi mảnh về lại đúng chỗ ngay lập tức. Nó không chỉ cho bạn cách đi, nhưng là
cách nhanh để có một lưới sạch để luyện một chuỗi xoay.

### Chuột và cảm ứng

- **Nhấp** vào tâm của một khối để xoay nó ngược chiều kim đồng hồ; **nhấp chuột phải** để
  xoay theo chiều kim đồng hồ. Với khối 2×2, tâm là góc nơi bốn mảnh gặp nhau; với khối có
  kích thước lẻ, tâm là mảnh ở giữa. Nhấp ra phía mép lưới sẽ xoay khối nằm sát mép đó.
- **Thuận chiều** (nút mũi tên xoay cạnh nút Hoàn tác) đổi hai chiều cho nhau: nhấp sẽ xoay khối theo chiều kim đồng hồ và nhấp chuột phải sẽ xoay ngược chiều kim đồng hồ. Nhấn lại để quay về.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển một khung viền cỡ một khối quanh lưới. **Enter** xoay khối
  trong khung ngược chiều kim đồng hồ và **Space** xoay theo chiều kim đồng hồ.
- **A**, **B**, **C** và **D** xoay các khối ở góc trên bên trái, trên bên phải, dưới bên
  trái và dưới bên phải ngược chiều kim đồng hồ; giữ **Shift** để xoay theo chiều kim
  đồng hồ.
- **T** là nút **Thuận chiều**.

## Tham số

- **Chiều rộng** và **chiều cao** của lưới.
- **Kích thước khối xoay**: cạnh của khối vuông mà một nước xoay (ít nhất là 2, và không
  lớn hơn lưới).
- **Mỗi hàng một số**: một biến thể dễ hơn, trong đó mọi mảnh trong một hàng có cùng một
  số.
- **Tính cả hướng**: các mảnh có hình tam giác và cuối cùng đều phải chỉ lên trên.
- **Số nước xáo trộn**: để 0 để xáo trộn kỹ, hoặc đặt một số nhỏ để có lưới cách lời giải
  đúng bấy nhiêu lần xoay. Khi đó mục tiêu của bạn là tìm ra những lần xoay đó và đảo
  ngược chúng, nên một lần xáo ba nước xứng đáng có đáp án ba nước (dù đôi khi có thể có
  cách đi ngắn hơn).
`,Ee=e({default:()=>De}),De=`# Xác sống

Lưới là một sảnh gương bị ma ám. Mỗi ô không có gương giấu một trong ba loại quái vật:
**ma**, **ma cà rồng** hoặc **thây ma**. Bảng chú thích phía trên lưới cho biết mỗi loại
còn bao nhiêu con cần đặt, và con số ở mỗi vị trí trên mép cho biết bạn sẽ thấy bao nhiêu
quái vật khi nhìn vào lưới từ đó, theo đường nhìn khi nó dội lại từ các tấm gương chéo.

Gương thay đổi những gì bạn thấy được. Ma cà rồng không có bóng phản chiếu, nên nó chỉ
được đếm khi đường nhìn của bạn chưa gặp tấm gương nào. Ma thì ngược lại: vô hình khi nhìn
thẳng, nó chỉ hiện ra sau một lần phản chiếu. Thây ma thì lúc nào cũng thấy được. Nếu một
đường nhìn đi qua cùng một ô hai lần, quái vật ở đó được đếm mỗi lần nó hiện ra. Hãy đặt
tất cả quái vật sao cho mọi con số ở mép và mọi tổng số đều đúng.

## Điều khiển

Con số ở mép chuyển xám khi đường nhìn của nó đã được tính đủ và chuyển đỏ khi không thể
thỏa được nữa; một số đếm trong bảng chú thích chuyển đỏ khi đã đặt quá nhiều quái vật
loại đó. Ghi chú bút chì chỉ để bạn tự ghi nhớ và không bao giờ ảnh hưởng đến câu đố.

### Chuột và cảm ứng

- **Nhấp chuột trái** vào một ô trống để đổi lần lượt qua ma, ma cà rồng, thây ma rồi
  về lại trống. Ô vẫn được làm nổi bật.
- Các phím trên màn hình chọn thẳng một quái vật cho ô đang được làm nổi bật, không
  cần đổi lần lượt; **⌫** xóa trống ô, kể cả ghi chú bút chì.
- **✎** trên bàn phím số bật chế độ **ghi chú bút chì**: quái vật bạn chọn khi đó được
  thêm vào (hoặc bỏ khỏi) danh sách khả năng của ô.
- **Nhấp chuột phải** vào một ô để thêm ghi chú bút chì từng khả năng một (ma, rồi ma cà
  rồng, rồi thây ma, rồi xóa).
- **Tầm nhìn** (nút con mắt cạnh nút Hoàn tác) vẽ các đường nhìn đi qua ô đang được làm nổi bật, bẻ hướng tại các gương, và khoanh tròn các số ở mép tại hai đầu mỗi đường. Khi bật, nhấp vào một số ở mép sẽ lần theo đường nhìn của chính số đó; nhấp lại để bỏ. Nhấn **Tầm nhìn** lần nữa để tắt. Khi bật, nhấp vào một ô chưa được làm nổi bật chỉ làm nổi bật ô đó, nên bạn có thể lần theo một ô trống mà không phải điền; nhấp lại để đổi ô như thường lệ.

### Bàn phím (Keyboard)

- Phím mũi tên di chuyển vùng làm nổi bật. Enter đổi lần lượt quái vật đang được làm nổi
  bật; Space đổi lần lượt ghi chú bút chì của nó.
- \`G\`, \`V\`, \`Z\` (hoặc \`1\`, \`2\`, \`3\`) đặt quái vật tương ứng vào ô đang được làm nổi bật,
  hoặc bật tắt ghi chú bút chì của nó khi vùng làm nổi bật đang ở chế độ bút chì. \`E\`,
  \`0\`, Backspace hoặc Delete xóa ô, kể cả ghi chú bút chì.
- \`S\` là nút **Tầm nhìn**.

## Tham số

- **Chiều rộng**, **Chiều cao** — kích thước lưới, từ 3×3 đến tổng cộng 54 ô.
- **Độ khó** — câu đố _Dễ_ chịu thua khi đếm dọc theo từng đường nhìn một; câu đố
  _Thường_ cần bạn cân nhắc các tổ hợp mà cả một đường đi cho phép; câu đố _Hóc búa_ không
  thể hoàn thành nếu không thử đoán.
`,Oe=e({default:()=>ke}),ke=`# Bất đẳng thức

Điền kín lưới sao cho mỗi hàng và mỗi cột chứa mỗi chữ số từ 1 đến kích thước lưới đúng
một lần — một hình vuông Latin — đồng thời tuân theo các dấu vẽ giữa những ô kề nhau.

Ở chế độ **Bất đẳng thức**, các dấu là dấu lớn hơn: phía mở của dấu \`>\` quay về chữ số
lớn hơn và mũi nhọn chĩa vào chữ số nhỏ hơn. Không phải cặp ô kề nhau nào cũng có dấu, và
câu đố càng khó thì càng ít dấu.

Ở chế độ **Liền kề**, các dấu là những vạch ngắn nghĩa là hai chữ số hơn kém nhau đúng
một (như 3 và 4). Ở đây mọi vạch luôn được hiện ra, nên việc **không có** vạch giữa hai ô
cũng là một manh mối: hai chữ số đó chắc chắn không liên tiếp.

Câu đố này xuất hiện trên báo chí với tên Futoshiki.

## Điều khiển

Chữ số nào vi phạm quy tắc — bị trùng trong hàng hoặc cột, hoặc làm một dấu không đúng —
sẽ hiện màu đỏ, cùng với dấu bị vi phạm. Câu đố hoàn thành khi mọi ô đều được điền và
không còn gì màu đỏ.

### Chuột và cảm ứng

- **Nhấp chuột trái** vào một ô để chọn nó, rồi dùng các phím trên màn hình để điền
  một chữ số. **⌫** trên bàn phím số xóa lại ô đang chọn. Nhấp vào ô đang chọn lần thứ
  hai sẽ bỏ chọn nó.
- **✎** trên bàn phím số bật chế độ **ghi chú bút chì**: những gì bạn chọn khi đó được
  thêm vào (hoặc bỏ khỏi) một danh sách nhỏ các khả năng trong ô thay vì điền đáp án.
  Điền một ô sẽ xóa sạch ghi chú bút chì của nó.
- **Nhấp chuột phải** vào một ô để chọn nó cho ghi chú bút chì ngay lập tức.
- **Ghi chú** trong menu tạm dừng điền mọi ghi chú bút chì có thể vào mọi ô trống, sẵn sàng để bạn gạch bớt; **Gợi ý** (nút bóng đèn cạnh nút Hoàn tác) làm tương tự nhưng bỏ đi những khả năng mà suy luận đơn giản đã loại trừ.
- **Tô sáng** (nút kính lúp cạnh nút Hoàn tác) làm nổi bật mọi ô chứa cùng chữ số với ô bạn nhấp gần nhất, kể cả các chữ số cho sẵn, và in đậm chữ số đó giữa các ghi chú bút chì. Nhấn lại để tắt.

### Bàn phím (Keyboard)

- **Gõ một chữ số** để điền vào ô đang chọn; \`0\`, Space hoặc Backspace xóa nó.
- Phím mũi tên di chuyển con trỏ quanh lưới; Enter chuyển con trỏ giữa điền chữ số và
  ghi chú bút chì.
- \`M\` là nút **Ghi chú**, \`H\` là **Gợi ý** và \`L\` là **Tô sáng**.

## Tham số

- **Chế độ** — Bất đẳng thức (dấu lớn hơn) hoặc Liền kề (vạch giữa hai chữ số liên tiếp).
- **Kích thước** — số hàng và số cột, từ 3 đến 9.
- **Độ khó** — câu đố cần suy luận nhiều đến đâu. Câu đố **Rất dễ** không bao giờ cần đến các dấu: ở
  chế độ Bất đẳng thức, câu đố không có dấu nào và chỉ là hình vuông Latin thuần túy; ở chế độ Liền
  kề, các vạch vẫn được vẽ nhưng chỉ riêng các chữ số cho sẵn đã đủ quyết định. Câu đố **Dễ** chỉ
  cần nghĩa trực tiếp của từng dấu; câu đố **Vừa** cần bạn xét các tập ô cùng lúc; câu đố **Khó**
  thêm suy luận tập hợp theo vị trí và các chuỗi suy diễn bắt buộc; câu đố **Cực khó** (chọn được
  trong hộp thoại Tùy chỉnh) có thể cần thử và sai, dù lời giải vẫn là duy nhất.
`,Ae=e({default:()=>je}),je=`# Đen trắng

Tô mỗi ô của lưới màu đen hoặc trắng. Một số ô được cho sẵn làm manh mối và không thể
thay đổi; các ô còn lại ban đầu màu xám và là việc của bạn. Khi xong, ba điều sau phải
đúng:

- mỗi hàng có số ô đen bằng số ô trắng;
- mỗi cột có số ô đen bằng số ô trắng;
- không có ba ô liên tiếp nào trong một hàng hoặc cột cùng màu.

Lỗi sai hiện màu đỏ: một dải từ ba ô cùng màu trở lên có khung đỏ, và một ô mang dấu **!**
đỏ khi hàng hoặc cột của nó đã có quá nhiều ô màu đó. Trong biến thể tùy chọn "hàng và cột
không trùng nhau", không có hai hàng nào (và không có hai cột nào) được theo cùng một mẫu;
những hàng hoặc cột trùng nhau bị gạch ngang màu đỏ.

## Điều khiển

Các ô manh mối — những ô vẽ có khung nhỏ bên trong — không thể thay đổi. **Giải** điền
toàn bộ lưới. Câu đố hoàn thành khi mọi ô đều được tô và không còn gì màu đỏ.

### Chuột và cảm ứng

- **Nhấp** vào một ô xám để tô đen; nhấp lần nữa để tô trắng, và thêm một lần nữa để xóa.
- **Nhấp chuột phải** đổi theo chiều ngược lại: trắng, rồi đen, rồi xóa.
- **Nhấp chuột giữa** xóa ô ngay lập tức.
- **Xóa** (nút cục tẩy cạnh nút Hoàn tác) khiến một cú nhấp xóa ô thay vì tô màu. Nhấn lại để quay về tô màu.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ quanh lưới.
- **Enter** đổi ô dưới con trỏ như nhấp chuột, còn **Space** như nhấp chuột phải.
- **1** tô đen, **0** (hoặc **2**) tô trắng và **Backspace** xóa.
- **E** là nút **Xóa**.

## Tham số

- **Chiều rộng** và **chiều cao** của lưới. Cả hai phải là số chẵn, và ít nhất là 6.
- **Hàng và cột không trùng nhau**: khi bật, không có hai hàng nào giống hệt nhau và
  không có hai cột nào giống hệt nhau (một hàng vẫn có thể giống một cột). Lưới quá cao
  hoặc quá rộng bị từ chối ở chế độ này vì không có đủ các mẫu khác nhau.
- **Độ khó**: câu đố _Dễ_ chỉ cần hai lập luận trực tiếp — hai ô cùng màu buộc ô bên cạnh
  hoặc ô ở giữa chúng phải mang màu kia, và một hàng hoặc cột đã đủ phần của một màu thì
  mọi ô còn lại mang màu kia. Câu đố _Thường_ còn cần bạn suy luận xem ô cuối cùng của một
  màu còn có thể nằm ở đâu trong một hàng hoặc cột mà không tạo thành dải ba ô. Mỗi câu
  đố có đúng một lời giải.
`,Me=e({default:()=>Ne}),Ne=`# Gỡ rối

Một nhóm điểm được nối với nhau bằng các đoạn thẳng, và các đường đang rối vào nhau. Hãy
di chuyển các điểm cho đến khi không còn hai đường nào cắt nhau. Mọi câu đố đều gỡ được:
máy đã dựng đồ thị từ một cách bố trí không có chỗ cắt nào rồi xáo các điểm lên một vòng
tròn.

Những đường đang cắt một đường khác được vẽ màu đỏ, nên mớ rối thu nhỏ dần trước mắt bạn
khi chơi; câu đố được giải khi không còn đường đỏ nào. Giải sẽ trượt mọi điểm tới một cách
bố trí mà máy biết là đúng.

## Điều khiển

Hoàn tác lấy lại bất kỳ nước nào, kể cả Giải.

### Chuột và cảm ứng

- **Kéo** một điểm và thả ra ở chỗ bạn muốn. Điểm bạn đang cầm chuyển màu cam và các điểm
  lân cận của nó chuyển xanh dương. Thả một điểm vào lề sẽ đặt nó ở mép bàn chơi; thả ra
  hẳn bên ngoài vùng vẽ sẽ hủy lần kéo.
- **Bắt lưới** (nút lưới cạnh nút Hoàn tác) bật hoặc tắt lưới bắt điểm: khi đó các điểm được thả sẽ rơi vào tâm các ô lưới được đánh dấu bằng chấm mờ, cũng là cách lời giải được bố trí. Nút luôn sáng khi lưới đang bật.

### Bàn phím (Keyboard)

- **Phím mũi tên** di chuyển con trỏ từ điểm này sang điểm khác theo hướng đó. **Enter**
  hoặc **Space** nhấc điểm lên; khi đó phím mũi tên mang nó đi (một phần tám ô mỗi lần
  nhấn, cả một ô khi giữ Shift, một bước nhỏ nhất khi giữ Ctrl) và **Enter** hoặc
  **Space** thả nó xuống.
- \`G\` là nút **Bắt lưới**.

## Tham số

- **Số điểm**: đồ thị có bao nhiêu điểm, ít nhất là 4. Càng nhiều điểm thì càng nhiều
  đường và mớ rối càng khó. Bàn chơi lớn dần theo số điểm nên luôn có chỗ để trải chúng ra.
`,Pe=e({$dir:()=>`ltr`,$locale:()=>`vi`,$name:()=>q,default:()=>Fe,games:()=>Q,messages:()=>X,status:()=>Z,touchPhrases:()=>Y,tutorials:()=>$,ui:()=>J}),q=`Tiếng Việt`,J=JSON.parse(`{"appName":"Puzzlebox","menu":{"title":"Puzzlebox","tagline":"{n} câu đố logic vẽ tay. Chọn một câu và chơi ngay.","lockedNote":"Mỗi câu đố bạn tự giải xong sẽ nhận một sao. Dùng sao ở đây để mở khóa câu đố mới.","language":"Ngôn ngữ","stat":{"credits":{"other":"★ {n} sao"},"unlocked":"Đã mở {n}/{total}","solved":"Đã giải {n}","tight":{"credits":"★ {n}","unlocked":"{n}/{total}","solved":"✓ {n}","achievements":"{n}/{total}"},"achievements":"{n}/{total} thành tích"},"search":{"placeholder":"Tìm câu đố","label":"Tìm câu đố theo tên","clear":"Xóa nội dung tìm kiếm","empty":"Không có câu đố nào tên là “{q}”. Hãy thử tên khác."},"hint":{"allOpen":"Mọi câu đố đều đã mở.","complete":"Bạn đã mở khóa toàn bộ bộ sưu tập!","spend":{"other":"Dùng sao bên dưới để mở khóa câu đố."},"earn":"Tự giải xong một câu đố bất kỳ để nhận một sao."},"card":{"label":"{name}: {description}","labelLocked":"{name}: {description} (đang khóa)","labelAlias":"{name} (còn gọi là {alias}): {description}","labelLockedAlias":"{name} (còn gọi là {alias}): {description} (đang khóa)","solvedTag":"✓ đã giải ×{n}","unlock":"Mở khóa · 1 sao","unlocked":"Đã mở khóa {name}!"},"noCredit":"Tự giải xong một câu đố bất kỳ để nhận một sao, rồi quay lại đây mở khóa câu này.","surprise":"Bất ngờ đi: mở một câu đố ngẫu nhiên","privacy":{"note":"Puzzlebox đếm cách các câu đố được chơi — không bao giờ ghi lại ai chơi — để làm chúng hay hơn."},"continue":"Tiếp tục","continueLabel":"Tiếp tục {name}","spend":"Dùng"},"notFound":{"title":"Không có câu đố này","body":"Chúng tôi không có câu đố nào tên là “{slug}”.","back":"Về danh sách câu đố"},"locked":"{name} vẫn đang khóa. Hãy giải xong một câu đố để nhận sao, rồi mở khóa nó.","pageTitle":"{name} · Puzzlebox","topbar":{"back":"Tất cả câu đố","help":"Trợ giúp","creditsTitle":"Sao dùng để mở khóa câu đố mới. Tự giải xong một câu đố để nhận một sao.","boardLabel":"Bàn chơi {name}"},"toolbar":{"type":"Loại","custom":"Tùy chỉnh…","new":"Mới","newTitle":"Ván mới (N)","restart":"Chơi lại","restartTitle":"Chơi lại câu đố này từ đầu","undo":"Hoàn tác","undoTitle":"Hoàn tác (U, Ctrl+Z)","redo":"Làm lại","redoTitle":"Làm lại (R, Ctrl+Y)","hint":"Gợi ý","hintTitle":"Mở một ô rồi chơi tiếp. Dùng tối đa {n} gợi ý vẫn được nhận sao.","solve":"Giải","solveTitle":"Hiện lời giải (Ctrl+S)","gameId":"Chia sẻ","gameIdTitle":"Chia sẻ câu đố này, hoặc chơi câu đố người khác gửi cho bạn","more":"Thêm","pause":"Tạm dừng","pauseTitle":"Menu tạm dừng (Esc)","keypad":"Bàn phím số","keypadTitle":"Hiện các phím trên màn hình","zoomOut":"−","zoomOutTitle":"Nhỏ hơn","zoomIn":"+","zoomInTitle":"Lớn hơn","tapPlace":"Chạm: đặt","tapMark":"Chạm: đánh dấu","tapTitle":"Một lần chạm thường sẽ làm gì","tapPlaceTitle":"Chạm để đặt; nhấn giữ để đánh dấu. Chạm để đổi.","tapMarkTitle":"Chạm để đánh dấu; nhấn giữ để đặt. Chạm để đổi."},"pause":{"title":"Đang tạm dừng","resume":"Tiếp tục"},"pager":{"label":"Trang","prev":"Trang trước","next":"Trang sau","page":"Trang {n}/{total}"},"badge":{"won":"Đã giải!","lost":"Thua rồi"},"stage":{"generating":"Đang tạo câu đố mới…"},"endgame":{"won":"Đã giải xong câu đố!","lost":"Thua rồi","credit":"★ +1 sao — đủ để mở khóa một câu đố mới trong bộ sưu tập.","wonNote":"Sẵn sàng cho câu tiếp theo chưa?","forfeitNote":"Câu đố này không được tính sao — đáp án đã được hiển thị giữa chừng.","lostNote":"Lần này chưa được. Thử lại nhé?","next":"Câu đố tiếp theo","retry":"Thử lại","dismiss":"Đóng và xem bàn chơi","time":"Thời gian","moves":"Nước đi","hints":"Gợi ý","best":"Tốt nhất {time}","newBest":"Kỷ lục mới!","stars":"{n} trên 3 sao","stepUp":"Thử {preset} →"},"keypad":{"label":"Bàn phím số","clear":"Xóa","clearTitle":"Xóa ô đang chọn (Backspace)","pencil":"Bút chì","pencilOnTitle":"Các phím đang được nhập thành ghi chú bút chì. Chạm để quay lại nhập đáp án.","pencilOffTitle":"Bật để nhập các phím tiếp theo thành ghi chú bút chì"},"drawer":{"title":"Cách chơi {name}","close":"Đóng","replay":"▶ Xem lại hướng dẫn","achievements":"Thành tích ({n}/{total})"},"dialog":{"ok":"OK","cancel":"Hủy","customTitle":"{name}: tùy chỉnh","gameIdTitle":"Chia sẻ câu đố này","shareLead":"Gửi đúng câu đố này cho người khác.","copyLink":"Sao chép liên kết","linkCopied":"Đã sao chép liên kết","codes":"Mã câu đố","byDescription":"Theo mô tả","bySeed":"Theo hạt giống ngẫu nhiên","enterLabel":"Chơi một câu đố cụ thể: dán mã vào đây","play":"Chơi","copy":"Sao chép","copied":"Đã sao chép","link":"Liên kết","linkTitle":"Sao chép liên kết mở đúng câu đố này","linkPrompt":"Liên kết tới câu đố này","hintAd":{"title":"Thêm một gợi ý?","body":"Bạn đã dùng hết {n} gợi ý miễn phí. Dùng thêm nghĩa là câu đố này sẽ không được tính sao — trừ khi bạn xem một quảng cáo ngắn để giữ lại.","watch":"Xem quảng cáo, giữ sao","anyway":"Vẫn lấy gợi ý"},"badCode":"Mã này không mở được câu đố {name}. Hãy kiểm tra xem đã sao chép đầy đủ chưa."},"toast":{"creditEarned":"+1 sao","tutorialComplete":"Đã xong phần hướng dẫn. Đây là một câu đố mới; tự giải xong để nhận một sao.","tutorialCompleteBack":"Đã xong phần hướng dẫn. Quay lại câu đố của bạn.","tutorialSkipped":"Đã bỏ qua hướng dẫn. Bạn có thể xem lại bất cứ lúc nào trong mục Trợ giúp.","tapModeMark":"Chạm để đánh dấu. Nhấn giữ để làm thao tác chính.","tapModePlace":"Chạm để làm thao tác chính. Nhấn giữ để đánh dấu.","touchHint":"Chạm để chơi, nhấn giữ để làm thao tác thứ hai. Nút tròn đầu tiên hoán đổi hai thao tác này.","hintNone":"Trên bàn chơi này không còn gì để mở.","hintNoCredit":"Bạn đã dùng quá {n} gợi ý, nên câu đố này sẽ không được tính sao — nhưng bạn vẫn có thể chơi tiếp đến cùng.","hintAdFailed":"Hiện không có quảng cáo nào, nên chưa có gì thay đổi — gợi ý vẫn còn đó nếu bạn cần.","stuck":"Bí rồi à? Gợi ý sẽ mở một ô, và câu đố vẫn cho bạn sao."},"tutorial":{"label":"Hướng dẫn {name}","step":"Bước {n}/{total}","next":"Tiếp","done":"Xong","skipStep":"Bỏ qua bước","skipTutorial":"Bỏ qua hướng dẫn","nice":"Tốt lắm!","offScript":"Không phải nước đó: nước đi đã được hoàn tác để các bước vẫn khớp với bàn. Hãy thử điều bước này yêu cầu.","offScriptRead":"Nước đó đã được hoàn tác để các bước vẫn khớp với bàn. Hãy đọc bước này trước.","pointer":{"drag":"kéo","rightClick":"nhấp chuột phải","rightDrag":"kéo chuột phải","middleClick":"nhấp chuột giữa","longPress":"nhấn giữ","longPressDrag":"nhấn giữ rồi kéo","twoFingerTap":"chạm hai ngón"}},"splash":{"tagline":"Câu đố vẽ tay, sẵn sàng để chơi","skip":"Bỏ qua"},"help":{"keypad":{"heading":"Bàn phím số","introTouch":"Các phím trên màn hình sẽ nhập giúp bạn","introPointer":"Nút **Bàn phím số** trên thanh công cụ hiện các phím trên màn hình để nhập giúp bạn","select":": hãy chọn một ô trên bàn chơi trước, rồi nhấn một phím.","clear":"- **⌫** xóa trống lại ô đang chọn.","pencil":"- **✎** bật chế độ ghi chú bút chì, để các phím được nhập thành ghi chú nhỏ thay vì\\n  đáp án. Nhấn lần nữa để quay lại nhập đáp án."}},"achievements":{"title":"Thành tích","summary":"Đã đạt {n}/{total}","unlocked":"Mở khóa thành tích","secret":{"name":"Thành tích bí mật","description":"Cứ chơi tiếp để khám phá."},"earnedOn":"Đạt được {date}","progress":"{n}/{goal}","collection":"Cả bộ sưu tập","tier":{"bronze":"Đồng","silver":"Bạc","gold":"Vàng"},"meta":{"first-solve":{"name":"Những bước đầu","description":"Tự tay giải câu đố đầu tiên."},"solves-10":{"name":"Khởi động","description":"Giải 10 câu đố."},"solves-50":{"name":"Nghiện giải đố","description":"Giải 50 câu đố."},"solves-100":{"name":"Bách chiến","description":"Giải 100 câu đố."},"solves-250":{"name":"Đại kiện tướng","description":"Giải 250 câu đố."},"specialist":{"name":"Chuyên tâm","description":"Giải 10 câu đố trong cùng một trò chơi."},"variety-3":{"name":"Nếm thử","description":"Giải một câu đố ở 3 trò chơi khác nhau."},"variety-10":{"name":"Toàn diện","description":"Giải một câu đố ở 10 trò chơi khác nhau."},"variety-all":{"name":"Trọn cả hộp","description":"Giải một câu đố ở mọi trò chơi trong bộ sưu tập."},"unlock-first":{"name":"Kệ mới","description":"Dùng một sao để mở khóa trò chơi đầu tiên."},"unlock-15":{"name":"Bộ sưu tập lớn dần","description":"Có 15 trò chơi đã mở khóa."},"unlock-25":{"name":"Chùm chìa khóa","description":"Có 25 trò chơi đã mở khóa."},"unlock-all":{"name":"Chìa khóa vạn năng","description":"Mở khóa mọi trò chơi trong bộ sưu tập."},"hardest-1":{"name":"Dám thử thách","description":"Giải một câu đố ở mức khó nhất của một trò chơi."},"hardest-10":{"name":"Chinh phục đỉnh cao","description":"Giải mức khó nhất của 10 trò chơi khác nhau."},"hardest-all":{"name":"Không gì lay chuyển","description":"Giải mức khó nhất của mọi trò chơi."},"pure-1":{"name":"Sạch sẽ tinh tươm","description":"Giải một câu đố mà không hoàn tác hay dùng gợi ý."},"pure-25":{"name":"Tay vững như bàn thạch","description":"Giải 25 câu đố mà không hoàn tác hay dùng gợi ý."},"quick-draw":{"name":"Nhanh như chớp","description":"Giải một câu đố trong 30 giây trở xuống."},"marathon":{"name":"Đường dài","description":"Giải một câu đố sau hơn 20 phút ngồi với nó."},"comeback":{"name":"Không bỏ cuộc","description":"Thua một câu đố, rồi quay lại giải được nó."},"second-thoughts":{"name":"Nghĩ đi nghĩ lại","description":"Hoàn tác 100 lần mà vẫn giải được câu đố."},"a-little-help":{"name":"Chút trợ giúp","description":"Dùng một gợi ý."},"oops":{"name":"Ối!","description":"Thua một câu đố."},"night-owl":{"name":"Cú đêm","description":"Giải một câu đố trong khoảng từ nửa đêm đến 5 giờ sáng."},"on-a-roll":{"name":"Đang vào phom","description":"Giải 5 câu đố trong một lần chơi."},"days-3":{"name":"Khách quen","description":"Chơi vào 3 ngày khác nhau."},"days-7":{"name":"Tận tụy","description":"Chơi vào 7 ngày khác nhau."},"days-30":{"name":"Người nhà","description":"Chơi vào 30 ngày khác nhau."},"quick-study":{"name":"Học nhanh","description":"Xem hết một phần hướng dẫn."},"scholar":{"name":"Học giả","description":"Xem hết 10 phần hướng dẫn khác nhau."},"collector-25":{"name":"Nhà sưu tầm huy hiệu","description":"Đạt 25 thành tích."},"collector-60":{"name":"Tủ cúp","description":"Đạt 60 thành tích."},"legend":{"name":"Huyền thoại giải đố","description":"Đạt mọi thành tích khác."}},"andMore":{"other":"Đã mở khóa {n} thành tích"}},"welcome":{"title":"Chọn câu đố đầu tiên","subtitle":{"other":"{n} câu đố để bắt đầu. Chọn một câu và chơi ngay."},"more":{"other":"…và còn {n} câu đố nữa để mở khóa"},"how":"Mỗi câu đố bạn giải xong mang lại một sao, và mỗi sao mở khóa một trò chơi mới."},"gamepad":{"connected":"Đã kết nối tay cầm"},"settings":{"title":"Cài đặt","done":"Xong","sound":"Âm thanh","volume":"Âm lượng","reduceMotion":"Giảm chuyển động","vibration":"Rung","statistics":"Thống kê chơi","on":"Bật","off":"Tắt","portalMuted":"Trang web đã tắt âm thanh."}}`),Y=[[`kéo chuột phải`,`nhấn giữ rồi kéo`],[`nhấp chuột phải`,`nhấn giữ`],[`nút chuột phải`,`nhấn giữ`],[`nhấp chuột giữa`,`chạm hai ngón`],[`nút chuột giữa`,`chạm hai ngón`],[`nhấp chuột trái`,`chạm`],[`nút chuột trái`,`chạm`],[`nhấp chuột`,`chạm`],[`nút chuột nào`,`kiểu chạm nào`],[`nhấp đúp`,`chạm hai lần`],[`nhấp`,`chạm`]],X=JSON.parse(`{"4-way rotational symmetry needs a square grid":"Đối xứng xoay 4 chiều cần lưới hình vuông","A 2×2 grid is too small to make a puzzle from":"Lưới 2×2 quá nhỏ để tạo câu đố","A cube rolling along a single row can never turn over all six faces":"Khối lập phương lăn trên một hàng duy nhất không bao giờ lật được cả sáu mặt","A given piece leaves the grid":"Một đoạn ray cho sẵn đi ra ngoài lưới","A jigsaw block is too big":"Một khối ghép hình quá lớn","A jigsaw block is too small":"Một khối ghép hình quá nhỏ","A killer cage is too big":"Một lồng Killer quá lớn","A killer cage is too small":"Một lồng Killer quá nhỏ","A wrapping puzzle needs a width and height of at least 3 to have a unique solution":"Câu đố nối vòng cần chiều rộng và chiều cao ít nhất là 3 để có lời giải duy nhất","All parameters must be whole numbers":"Mọi tham số phải là số nguyên","Already solved":"Đã giải rồi","An edge cannot join a point to itself":"Một cạnh không thể nối một điểm với chính nó","Angle offset out of bounds.":"Độ lệch góc vượt quá giới hạn.","At least one grid dimension must be greater than zero":"Ít nhất một kích thước lưới phải lớn hơn 0","At least one of width and height for this grid type must be at least {0}":"Với kiểu lưới này, chiều rộng hoặc chiều cao phải có ít nhất một giá trị từ {0} trở lên","At least one of width and height must be greater than one":"Chiều rộng hoặc chiều cao phải có ít nhất một giá trị lớn hơn 1","Bad character in grid description":"Ký tự không hợp lệ trong mô tả lưới","Bad mine layout in game description":"Cách bố trí mìn trong mô tả ván chơi không hợp lệ","Badly formatted move limit after grid description":"Giới hạn số nước sau mô tả lưới sai định dạng","Barrier probability must be a number between 0 and 1":"Xác suất có rào chắn phải là một số từ 0 đến 1","Barrier probability must be between 0 and 1":"Xác suất có rào chắn phải nằm trong khoảng 0 đến 1","Blue cells are placed where some faces could never reach them":"Có ô xanh nằm ở chỗ mà một số mặt không bao giờ chạm tới được","Both dimensions must be at least 2":"Cả hai kích thước phải ít nhất là 2","Both grid dimensions must be at least one":"Cả hai kích thước lưới phải ít nhất là 1","Bridges per direction must be between 1 and {0}":"Số cầu mỗi hướng phải từ 1 đến {0}","Can't create {0}×{1} puzzles":"Không thể tạo câu đố {0}×{1}","Clue did not provide 2 direction flags":"Manh mối không có đủ 2 cờ hướng","Clue is larger than the number of sides of its face":"Manh mối lớn hơn số cạnh của ô chứa nó","Clue is missing its number":"Manh mối thiếu con số","Clue number out of range":"Số của manh mối nằm ngoài phạm vi","Colour out of range":"Màu nằm ngoài phạm vi","Colour out of range in grid description":"Màu trong mô tả lưới nằm ngoài phạm vi","Colours, pegs and guesses must be whole numbers":"Số màu, số chốt và số lần đoán phải là số nguyên","Column counts inconsistent":"Số đếm của các cột không nhất quán","Could not four-colour the map":"Không thể tô bản đồ bằng bốn màu","Count is larger than the line it describes":"Số đếm lớn hơn độ dài của hàng hoặc cột mà nó mô tả","Description contains a duplicate number":"Mô tả chứa một số bị trùng","Description contains a number larger than the grid":"Mô tả chứa một số lớn hơn lưới","Description contains a number out of range":"Mô tả chứa một số nằm ngoài phạm vi","Description contains a number that is too large":"Mô tả chứa một số quá lớn","Description contains a repeated number":"Mô tả chứa một số bị lặp lại","Description contains an unexpected character":"Mô tả chứa một ký tự không mong đợi","Description contains invalid characters":"Mô tả chứa ký tự không hợp lệ","Description is corrupted":"Mô tả bị hỏng","Description is longer than expected":"Mô tả dài hơn dự kiến","Description is shorter than expected":"Mô tả ngắn hơn dự kiến","Description is too long":"Mô tả quá dài","Description is too short":"Mô tả quá ngắn","Description marks cells beyond the grid as blue":"Mô tả đánh dấu xanh những ô nằm ngoài lưới","Description may only contain P, H and O":"Mô tả chỉ được chứa P, H và O","Description must be a comma-separated list of numbers":"Mô tả phải là danh sách số cách nhau bằng dấu phẩy","Description must be exactly {0} characters":"Mô tả phải dài đúng {0} ký tự","Description must be hex digits, a comma and a cell number":"Mô tả phải gồm các chữ số thập lục phân, một dấu phẩy và số thứ tự ô","Description must be numbers each followed by an orientation letter (u, l, d or r)":"Mô tả phải là các số, mỗi số theo sau bởi một chữ cái chỉ hướng (u, l, d hoặc r)","Description must be two hex strings separated by a comma":"Mô tả phải là hai chuỗi thập lục phân cách nhau bằng dấu phẩy","Description must be {0} hexadecimal digits":"Mô tả phải gồm {0} chữ số thập lục phân","Description must contain at least one edge":"Mô tả phải chứa ít nhất một cạnh","Description must contain at least one peg":"Mô tả phải chứa ít nhất một chốt","Description must contain at least two islands":"Mô tả phải chứa ít nhất hai đảo","Description must contain each number from 1 to {0} exactly once":"Mô tả phải chứa mỗi số từ 1 đến {0} đúng một lần","Description must contain each row number from 1 to {0} exactly {1} times":"Mô tả phải chứa mỗi số hàng từ 1 đến {0} đúng {1} lần","Description must contain only digits":"Mô tả chỉ được chứa chữ số","Description must contain only numbers":"Mô tả chỉ được chứa số","Description must contain {0} numbers":"Mô tả phải chứa {0} số","Description must contain {0} tiles":"Mô tả phải chứa {0} mảnh","Description must mark exactly {0} cells blue":"Mô tả phải đánh dấu xanh đúng {0} ô","Description must start with {0} hex digits":"Mô tả phải bắt đầu bằng {0} chữ số thập lục phân","Description places two islands next to each other":"Mô tả đặt hai đảo nằm sát nhau","Description repeats a colour although duplicates are disallowed":"Mô tả lặp lại một màu dù không cho phép trùng màu","Description too long":"Mô tả quá dài","Description too long for board size":"Mô tả quá dài so với kích thước bàn chơi","Description too short":"Mô tả quá ngắn","Description too short for board size":"Mô tả quá ngắn so với kích thước bàn chơi","Digits in a {0}×{1} puzzle cannot exceed {2}":"Chữ số trong câu đố {0}×{1} không được vượt quá {2}","Disallowing duplicates requires at least as many colours as pegs":"Không cho phép trùng màu thì số màu phải ít nhất bằng số chốt","Domino descriptions inconsistent":"Mô tả các quân domino không nhất quán","Dots too close together":"Các dấu chấm quá gần nhau","Duplicate edge in game description":"Cạnh bị trùng trong mô tả ván chơi","Edge list defines the wrong number of regions":"Danh sách cạnh xác định sai số vùng","Entrance square must contain a piece leaving the left edge":"Ô lối vào phải chứa một đoạn ray đi ra từ mép trái","Every killer cage must have exactly one sum":"Mỗi lồng Killer phải có đúng một tổng","Exit square must contain a piece leaving the bottom edge":"Ô lối ra phải chứa một đoạn ray đi ra từ mép dưới","Expansion factor must be a number":"Hệ số giãn phải là một số","Expansion factor may not be negative":"Hệ số giãn không được âm","Expansion factor must be from 0 to 100":"Hệ số giãn phải từ 0 đến 100","Expected ',' after block structure description":"Cần có ',' sau cấu trúc khối","Expected ',' after grid description":"Cần có ',' sau mô tả lưới","Expected a list of edges like 0-1,1-2 in game description":"Mô tả ván chơi cần có danh sách cạnh dạng 0-1,1-2","Expected comma before clue list":"Cần có dấu phẩy trước danh sách manh mối","Expected jigsaw block structure in game description":"Mô tả ván chơi cần có cấu trúc khối ghép hình","Expected killer cage structure in game description":"Mô tả ván chơi cần có cấu trúc lồng Killer","Expected killer clue grid in game description":"Mô tả ván chơi cần có lưới manh mối Killer","Expected slashes between clues":"Cần có dấu gạch chéo giữa các manh mối","Expecting number in game description":"Mô tả ván chơi cần có một số","Extra moves must not be negative":"Số nước dư không được âm","Extreme puzzles with more than {0} symbols take too long to generate":"Câu đố cực khó có hơn {0} ký hiệu mất quá nhiều thời gian để tạo","Faulty game description":"Mô tả ván chơi bị lỗi","Flags contradicting each other":"Các cờ mâu thuẫn với nhau","Flags go off grid":"Các cờ đi ra ngoài lưới","Game ID must include parameters":"Mã ván chơi phải có tham số","Game description contained unexpected characters":"Mô tả ván chơi chứa ký tự không mong đợi","Game description contains an unexpected character":"Mô tả ván chơi chứa một ký tự không mong đợi","Game description contains no dots":"Mô tả ván chơi không chứa dấu chấm nào","Game description contains unexpected characters":"Mô tả ván chơi chứa ký tự không mong đợi","Game description has {0} balls; expected {1}":"Mô tả ván chơi có {0} bi; cần {1}","Game description is corrupted":"Mô tả ván chơi bị hỏng","Game description is longer than expected":"Mô tả ván chơi dài hơn dự kiến","Game description is shorter than expected":"Mô tả ván chơi ngắn hơn dự kiến","Game description is the wrong length":"Mô tả ván chơi sai độ dài","Game description is too long":"Mô tả ván chơi quá dài","Game description is too short":"Mô tả ván chơi quá ngắn","Game description is wrong length":"Mô tả ván chơi sai độ dài","Game description longer than expected":"Mô tả ván chơi dài hơn dự kiến","Game description must be hexadecimal":"Mô tả ván chơi phải ở dạng thập lục phân","Game description shorter than expected":"Mô tả ván chơi ngắn hơn dự kiến","Game description too long":"Mô tả ván chơi quá dài","Game is already solved":"Ván chơi đã được giải rồi","Grid area must be at least six squares":"Diện tích lưới phải ít nhất là sáu ô","Grid area must be greater than 1":"Diện tích lưới phải lớn hơn 1","Grid area must be greater than one":"Diện tích lưới phải lớn hơn 1","Grid description is the wrong length or not hexadecimal":"Mô tả lưới sai độ dài hoặc không ở dạng thập lục phân","Grid description strings not used with this grid type":"Loại lưới này không dùng mô tả lưới","Grid dimensions cannot be negative":"Kích thước lưới không được âm","Grid dimensions must be at most {0}":"Kích thước lưới tối đa là {0}","Grid dimensions must be whole numbers":"Kích thước lưới phải là số nguyên","Grid is too big":"Lưới quá lớn","Grid must contain at least two squares":"Lưới phải có ít nhất hai ô","Grid size must be between 3 and 9":"Kích thước lưới phải từ 3 đến 9","Grid size must be between {0} and {1}":"Kích thước lưới phải từ {0} đến {1}","Hard and Extreme puzzles are limited to a maximum number of {0}":"Câu đố Khó và Cực khó chỉ dùng số lớn nhất tối đa là {0}","Height must be at least 3":"Chiều cao phải ít nhất là 3","Height must be at least five":"Chiều cao phải ít nhất là 5","Height must be at least one":"Chiều cao phải ít nhất là 1","Height must be at least the rotating block size":"Chiều cao phải ít nhất bằng kích thước khối xoay","Height must be at least two":"Chiều cao phải ít nhất là 2","Illegal grid type":"Kiểu lưới không hợp lệ","Incorrect number balance in game description":"Số lượng các số trong mô tả ván chơi không cân bằng","Initial x-coordinate was out of range":"Tọa độ x ban đầu nằm ngoài phạm vi","Initial y-coordinate was out of range":"Tọa độ y ban đầu nằm ngoài phạm vi","Internal error: solution is badly formatted":"Lỗi nội bộ: lời giải sai định dạng","Invalid character in block structure specification":"Ký tự không hợp lệ trong đặc tả cấu trúc khối","Invalid character in game description":"Ký tự không hợp lệ trong mô tả ván chơi","Invalid character in grid specification":"Ký tự không hợp lệ trong đặc tả lưới","Invalid character in number list":"Ký tự không hợp lệ trong danh sách số","Invalid characters in game description":"Ký tự không hợp lệ trong mô tả ván chơi","Invalid format grid description string.":"Chuỗi mô tả lưới sai định dạng.","Invalid parameters: {0}":"Tham số không hợp lệ: {0}","Invalid syntax in game description":"Cú pháp trong mô tả ván chơi không hợp lệ","Jigsaw puzzles with more than {0} symbols take too long to generate":"Câu đố ghép hình có hơn {0} ký hiệu mất quá nhiều thời gian để tạo","Killer puzzle dimensions must be smaller than 10":"Kích thước câu đố Killer phải nhỏ hơn 10","Malformed pending game description":"Mô tả ván chơi đang chờ bị sai định dạng","Matrix description is the wrong length or not hexadecimal":"Mô tả ma trận sai độ dài hoặc không ở dạng thập lục phân","Maximum face number must be a whole number":"Số lớn nhất trên mặt phải là số nguyên","Maximum face number must be at least one":"Số lớn nhất trên mặt phải ít nhất là 1","Maximum face number must be at most {0}":"Số lớn nhất trên mặt tối đa là {0}","Maximum of 9 colours":"Tối đa 9 màu","Medium puzzles need more than one bridge per direction, or loops disallowed":"Câu đố Vừa cần nhiều hơn một cầu mỗi hướng, hoặc không cho phép vòng","Mines solver opened a mine: inconsistent knowledge":"Trình giải Dò mìn đã mở phải mìn: dữ kiện không nhất quán","Minimum number of balls may not be greater than maximum":"Số bi tối thiểu không được lớn hơn số bi tối đa","Missing grid description string.":"Thiếu chuỗi mô tả lưới.","Missing separator":"Thiếu dấu phân cách","Monster numbers do not match grid spaces":"Số quái vật không khớp với số ô trống trên lưới","More than one starting square specified":"Có nhiều hơn một ô xuất phát","Multiple solutions exist for this puzzle":"Câu đố này có nhiều lời giải","Must have at least five regions":"Phải có ít nhất năm vùng","Must have at least one guess":"Phải có ít nhất một lần đoán","Must have between {0} and {1} colours":"Phải có từ {0} đến {1} màu","No game set up to solve":"Chưa có ván chơi nào để giải","No gems specified":"Không có viên đá quý nào","No solution exists for this position":"Thế cờ này không có lời giải","No solution exists for this puzzle":"Câu đố này không có lời giải","No solution found":"Không tìm thấy lời giải","No starting square specified":"Chưa chỉ định ô xuất phát","Not enough data in block structure specification":"Không đủ dữ liệu trong đặc tả cấu trúc khối","Not enough data in grid description":"Không đủ dữ liệu trong mô tả lưới","Not enough data to fill grid":"Không đủ dữ liệu để lấp đầy lưới","Not enough grid space to place all blue faces":"Lưới không đủ chỗ để đặt hết các mặt xanh","Not enough jigsaw blocks":"Không đủ khối ghép hình","Not enough killer cages":"Không đủ lồng Killer","Not enough numbers given after grid specification":"Không đủ số sau đặc tả lưới","Not enough space to place the solid on an empty cell":"Không đủ chỗ để đặt khối lên một ô trống","Number of colours must be at least three":"Số màu phải ít nhất là 3","Number of colours must be at least two":"Số màu phải ít nhất là 2","Number of points must be a whole number":"Số điểm phải là số nguyên","Number of points must be at least {0}":"Số điểm phải ít nhất là {0}","Number of points must be at most {0}":"Số điểm tối đa là {0}","Number of shuffling moves cannot be negative":"Số nước xáo trộn không được âm","Number of shuffling moves must be a whole number":"Số nước xáo trộn phải là số nguyên","Number of shuffling moves must be at most 10000":"Số nước xáo trộn tối đa là 10000","Number of shuffling moves must be at most {0}":"Số nước xáo trộn tối đa là {0}","Number out of range in game description":"Số trong mô tả ván chơi nằm ngoài phạm vi","Number too large":"Số quá lớn","Out-of-range number in game description":"Số trong mô tả ván chơi nằm ngoài phạm vi","Out-of-range number in grid description":"Số trong mô tả lưới nằm ngoài phạm vi","Parameters must be whole numbers":"Tham số phải là số nguyên","Patch coordinates do not identify a usable grid fragment":"Tọa độ vùng cắt không xác định được một mảnh lưới dùng được","Patch offset out of bounds.":"Độ lệch vùng cắt vượt quá giới hạn.","Percentage of black squares must be between 5% and 100%":"Tỷ lệ ô đen phải từ 5% đến 100%","Percentage of islands must be from 1% to 30%":"Tỷ lệ đảo phải từ 1% đến 30%","Puzzle is inconsistent":"Câu đố không nhất quán","Puzzle is too large":"Câu đố quá lớn","Puzzle is too long for unique-rows mode":"Câu đố quá dài cho chế độ hàng không trùng nhau","Puzzle is too tall for unique-rows mode":"Câu đố quá cao cho chế độ hàng không trùng nhau","Puzzle is unsolvable":"Câu đố không thể giải được","Puzzle must have one entrance and one exit":"Câu đố phải có một lối vào và một lối ra","Puzzles with more than {0} symbols take too long to generate":"Câu đố có hơn {0} ký hiệu mất quá nhiều thời gian để tạo","Random seed must not be empty":"Hạt giống ngẫu nhiên không được để trống","Rotating block size must be at least two":"Kích thước khối xoay phải ít nhất là 2","Row counts inconsistent":"Số đếm của các hàng không nhất quán","Rows of blocks must be at least 1":"Số hàng của khối phải ít nhất là 1","Scoring system not recognised":"Không nhận ra cách tính điểm","Size and difficulty must be whole numbers":"Kích thước và độ khó phải là số nguyên","Size must be at least 5 for Adjacent puzzles of this difficulty":"Câu đố Liền kề ở độ khó này cần kích thước ít nhất là 5","Size must be between {0} and {1}":"Kích thước phải từ {0} đến {1}","Solution not known for this puzzle":"Chưa biết lời giải của câu đố này","Solve operation failed":"Giải thất bại","Solve operation produced an invalid move":"Thao tác giải tạo ra một nước đi không hợp lệ","Solver could not finish this grid":"Trình giải không thể hoàn thành lưới này","Solving algorithm cannot complete this puzzle":"Thuật toán giải không thể hoàn thành câu đố này","Starting cell is outside the grid":"Ô xuất phát nằm ngoài lưới","Subtraction and division blocks must have area 2":"Lồng phép trừ và phép chia phải có diện tích bằng 2","That grid has too many faces to generate":"Lưới đó có quá nhiều ô để tạo","The Cross board is only available at {0}×{1}":"Bàn chơi Chữ thập chỉ có ở kích thước {0}×{1}","The Octagon board is only available at {0}×{1}":"Bàn chơi Bát giác chỉ có ở kích thước {0}×{1}","The ball has hit a mine; undo that move first":"Viên bi đã đụng phải mìn; hãy hoàn tác nước đó trước","The grid can have at most {0} squares":"Lưới có thể có tối đa {0} ô","The grid may have at most {0} squares":"Lưới chỉ được có tối đa {0} ô","The initial square contains a mine":"Ô ban đầu có mìn","The solid cannot start on a blue cell":"Khối không thể bắt đầu trên một ô xanh","The solution has already been revealed":"Lời giải đã được hiện ra rồi","There must be at least one ball":"Phải có ít nhất một viên bi","There must be at least one mine":"Phải có ít nhất một quả mìn","This arrangement cannot be solved":"Cách sắp xếp này không thể giải được","This game does not support the Solve operation":"Trò chơi này không hỗ trợ chức năng Giải","This puzzle has no solution":"Câu đố này không có lời giải","This puzzle instance contains a contradiction":"Câu đố này chứa một mâu thuẫn","This puzzle is not self-consistent":"Câu đố này tự mâu thuẫn","Too few clues for block structure":"Quá ít manh mối so với cấu trúc khối","Too few clues for grid size":"Quá ít manh mối so với kích thước lưới","Too little data in clue list":"Quá ít dữ liệu trong danh sách manh mối","Too little data in edge list":"Quá ít dữ liệu trong danh sách cạnh","Too many balls to fit in the grid":"Quá nhiều bi để vừa trong lưới","Too many clues for block structure":"Quá nhiều manh mối so với cấu trúc khối","Too many clues for grid size":"Quá nhiều manh mối so với kích thước lưới","Too many colours (at most {0})":"Quá nhiều màu (tối đa {0})","Too many colours makes given grid size impossible":"Quá nhiều màu khiến kích thước lưới đã cho không thể thực hiện được","Too many guesses (at most {0})":"Quá nhiều lần đoán (tối đa {0})","Too many jigsaw blocks":"Quá nhiều khối ghép hình","Too many killer cages":"Quá nhiều lồng Killer","Too many mines for grid size":"Quá nhiều mìn so với kích thước lưới","Too many pegs per guess (at most {0})":"Quá nhiều chốt mỗi lần đoán (tối đa {0})","Too many regions to fit in grid":"Quá nhiều vùng để vừa trong lưới","Too much data in block structure specification":"Quá nhiều dữ liệu trong đặc tả cấu trúc khối","Too much data in clue list":"Quá nhiều dữ liệu trong danh sách manh mối","Too much data in edge list":"Quá nhiều dữ liệu trong danh sách cạnh","Too much data to fill grid":"Quá nhiều dữ liệu để lấp đầy lưới","Too much data to fit in grid":"Quá nhiều dữ liệu để vừa trong lưới","Trivial solutions are uninteresting":"Lời giải hiển nhiên thì chẳng thú vị gì","Unable to build a grid for these parameters":"Không thể dựng lưới với các tham số này","Unable to build this grid":"Không thể dựng lưới này","Unable to find a solution for this puzzle":"Không tìm được lời giải cho câu đố này","Unable to find a solution from this position":"Không tìm được lời giải từ thế cờ này","Unable to find a solution to this puzzle":"Không tìm được lời giải cho câu đố này","Unable to find a unique solution for this puzzle":"Không tìm được lời giải duy nhất cho câu đố này","Unable to generate a puzzle of this size":"Không thể tạo câu đố với kích thước này","Unable to generate a puzzle with these parameters":"Không thể tạo câu đố với các tham số này","Unable to solve this puzzle":"Không thể giải câu đố này","Unable to support more than {0} distinct symbols":"Không thể hỗ trợ hơn {0} ký hiệu khác nhau","Unable to work out any more of this puzzle":"Không thể suy ra thêm gì cho câu đố này","Unexpected additional character at end of game description":"Có ký tự thừa không mong đợi ở cuối mô tả ván chơi","Unexpected additional data at end of game description":"Có dữ liệu thừa không mong đợi ở cuối mô tả ván chơi","Unexpected character '{0}' in description":"Ký tự không mong đợi '{0}' trong mô tả","Unexpected character in clue list":"Ký tự không mong đợi trong danh sách manh mối","Unexpected character in edge list":"Ký tự không mong đợi trong danh sách cạnh","Unexpected data at end of game description":"Dữ liệu không mong đợi ở cuối mô tả ván chơi","Unknown board type":"Kiểu bàn chơi không xác định","Unknown character in description":"Ký tự lạ trong mô tả","Unknown difficulty":"Độ khó không xác định","Unknown difficulty level":"Mức độ khó không xác định","Unknown difficulty rating":"Mức đánh giá độ khó không xác định","Unknown shape type":"Kiểu hình không xác định","Unknown symmetry":"Kiểu đối xứng không xác định","Unknown symmetry type":"Kiểu đối xứng không xác định","Unrecognised character in game description":"Ký tự không nhận ra trong mô tả ván chơi","Unrecognised characters in game description":"Các ký tự không nhận ra trong mô tả ván chơi","Unrecognised clue type":"Kiểu manh mối không nhận ra","Unrecognised grid description.":"Mô tả lưới không nhận ra được.","Unrecognised solid type":"Loại khối không nhận ra","Width and height cannot both be two":"Chiều rộng và chiều cao không thể cùng bằng 2","Width and height for this grid type must both be at least {0}":"Với kiểu lưới này, chiều rộng và chiều cao đều phải ít nhất là {0}","Width and height must be at least two":"Chiều rộng và chiều cao phải ít nhất là 2","Width and height must be at least {0}":"Chiều rộng và chiều cao phải ít nhất là {0}","Width and height must be at most twelve":"Chiều rộng và chiều cao tối đa là 12","Width and height must be at most {0}":"Chiều rộng và chiều cao tối đa là {0}","Width and height must be at most {0} to generate a puzzle":"Chiều rộng và chiều cao phải tối đa là {0} để tạo được câu đố","Width and height must be positive":"Chiều rộng và chiều cao phải là số dương","Width and height must be whole numbers":"Chiều rộng và chiều cao phải là số nguyên","Width and height must both be at least 3":"Chiều rộng và chiều cao đều phải ít nhất là 3","Width and height must both be at least four":"Chiều rộng và chiều cao đều phải ít nhất là 4","Width and height must both be at least one":"Chiều rộng và chiều cao đều phải ít nhất là 1","Width and height must both be at least two":"Chiều rộng và chiều cao đều phải ít nhất là 2","Width and height must both be even":"Chiều rộng và chiều cao đều phải là số chẵn","Width and height must both be greater than three":"Chiều rộng và chiều cao đều phải lớn hơn 3","Width and height must both be greater than two":"Chiều rộng và chiều cao đều phải lớn hơn 2","Width and height must both be greater than zero":"Chiều rộng và chiều cao đều phải lớn hơn 0","Width and height must both be positive":"Chiều rộng và chiều cao đều phải là số dương","With three colours, a solvable grid may have at most {0} squares":"Với ba màu, lưới giải được chỉ có tối đa {0} ô","Width must be at least 3":"Chiều rộng phải ít nhất là 3","Width must be at least five":"Chiều rộng phải ít nhất là 5","Width must be at least one":"Chiều rộng phải ít nhất là 1","Width must be at least the rotating block size":"Chiều rộng phải ít nhất bằng kích thước khối xoay","Width must be at least two":"Chiều rộng phải ít nhất là 2","Width, height and ball counts must be whole numbers":"Chiều rộng, chiều cao và số bi phải là số nguyên","Width, height and difficulty must be whole numbers":"Chiều rộng, chiều cao và độ khó phải là số nguyên","Width, height and number of colours must be whole numbers":"Chiều rộng, chiều cao và số màu phải là số nguyên","Width, height, block size and move count must be whole numbers":"Chiều rộng, chiều cao, kích thước khối và số nước phải là số nguyên","X puzzles need at least four symbols":"Câu đố X cần ít nhất bốn ký hiệu","X-diagonal jigsaw puzzles with more than {0} symbols take too long to generate":"Câu đố ghép hình chéo X có hơn {0} ký hiệu mất quá nhiều thời gian để tạo","You have hit a mine; undo that move first":"Bạn đã đạp phải mìn; hãy hoàn tác nước đó trước","a cell may be a number position for only one rectangle":"một ô chỉ có thể là vị trí con số của một hình chữ nhật","at least one column contains more numbers than will fit":"ít nhất một cột chứa nhiều số hơn mức có thể xếp vừa","at least one row contains more numbers than will fit":"ít nhất một hàng chứa nhiều số hơn mức có thể xếp vừa","cells are not adjacent":"các ô không kề nhau","domino layout: no path between singletons":"bố trí domino: không có đường nối giữa các ô lẻ","domino layout: stranded square cannot be paired":"bố trí domino: ô bị cô lập không ghép cặp được","dot touches the outside twice":"dấu chấm chạm vào bên ngoài hai lần","dot with fewer than two edges":"dấu chấm có ít hơn hai cạnh","edge does not follow its face":"cạnh không đi theo ô của nó","edge shared by three faces":"cạnh dùng chung cho ba ô","expected CxR or Nj":"cần dạng CxR hoặc Nj","expected WxH":"cần dạng WxH","expected WxHnN":"cần dạng WxHnN","expected a grid size":"cần một kích thước lưới","expected a maximum number":"cần một số lớn nhất","expected a number of points":"cần số điểm","expected a solid letter followed by WxH":"cần một chữ cái chỉ loại khối, theo sau là WxH","expected something like c6p4g10Bm":"cần dạng như c6p4g10Bm","expected w<W>h<H>m<MIN>M<MAX>":"cần dạng w<W>h<H>m<MIN>M<MAX>","generateKeen: solver disagrees with the square":"generateKeen: trình giải không khớp với hình vuông","grid inconsistency while walking round a face":"lưới không nhất quán khi đi vòng quanh một ô","inconsistent clues while assembling":"manh mối không nhất quán khi lắp ghép","inconsistent distance field":"trường khoảng cách không nhất quán","inconsistent face classes":"các lớp ô không nhất quán","latin rectangle could not be extended":"không thể mở rộng hình chữ nhật Latin","latinGenerate: no extension found":"latinGenerate: không tìm thấy cách mở rộng","latinSquare: rectangle could not be extended":"latinSquare: không thể mở rộng hình chữ nhật","line too long for solver":"hàng quá dài đối với trình giải","no clue left to place":"không còn manh mối nào để đặt","no such laser: {0}":"không có tia laser nào như vậy: {0}","rolled solid does not fit its destination":"khối sau khi lăn không vừa vị trí đích","shown":"đã hiện","too few row/column specifications":"quá ít đặc tả hàng/cột","too many row/column specifications":"quá nhiều đặc tả hàng/cột","unrecognised character in game description":"ký tự không nhận ra trong mô tả ván chơi","yes!":"đúng rồi!","9×9 Extreme puzzles take too long to generate; try 8×8 or Expert":"Câu đố 9×9 Cực khó mất quá nhiều thời gian để tạo; hãy thử 8×8 hoặc Chuyên gia"}`),Z={moves:`Số nước: {n}`,movesCompleted:{other:`Hoàn thành sau {n} nước`},movesSinceSolve:`Số nước từ lúc tự giải: {n}`,completedMoves:`Hoàn thành! Số nước: {n}`,solvedByComputer:`Máy đã giải`,completed:`Hoàn thành!`,completedPrefix:`Hoàn thành! `,autoSolved:`Đã tự giải.`,autoSolvedPrefix:`Đã tự giải. `,autoSolverUsedPrefix:`Đã dùng trình tự giải. `,failedPrefix:`Hết nước đi. `,dead:`Bạn đã đạp phải mìn.`,target:` (mục tiêu {n})`},Q=JSON.parse(`{"blackbox":{"name":"Hộp đen","description":"Tìm những viên bi ẩn bằng cách bắn tia laser vào hộp và xem tia đi ra ở đâu.","preset":{"5x5_3_balls":"5×5, 3 bi","8x8_5_balls":"8×8, 5 bi","8x8_3_6_balls":"8×8, 3-6 bi","10x10_5_balls":"10×10, 5 bi","10x10_4_10_balls":"10×10, 4-10 bi"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"no_of_balls":{"name":"Số bi"}},"status":{"correct":"CHÍNH XÁC!","wrong":{"other":"{wrong} bi sai và {n} bi bị bỏ sót."},"marked":"Bi đã đánh dấu: {n} / {range}  ·  Tia đã bắn: {fired}","tooMany":"  ·  Đánh dấu thừa {n} bi.","check":"  ·  Nhấp nút ở góc để kiểm tra."},"achievement":{"sparing_shots":{"name":"Bắn dè sẻn","description":"Tìm ra mọi viên bi mà chỉ bắn tia từ không quá một nửa số cửa bắn."},"pinpoint":{"name":"Chính xác từng li","description":"Tìm ra mọi viên bi trong hộp 8×8 trở lên, bắn tối đa ba tia cho mỗi viên bi."},"shot_in_the_dark":{"name":"Bắn trong bóng tối","description":"Kiểm tra đáp án mà chưa bắn một tia nào, và đoán sai."}}},"bridges":{"name":"Xây cầu","alsoKnownAs":"Hashiwokakero, Hashi","description":"Nối các hòn đảo bằng cầu sao cho đủ mọi con số và không cây cầu nào cắt nhau.","preset":{"7x7_easy":"7×7 Dễ","7x7_medium":"7×7 Vừa","7x7_hard":"7×7 Khó","10x10_easy":"10×10 Dễ","10x10_medium":"10×10 Vừa","10x10_hard":"10×10 Khó","15x15_easy":"15×15 Dễ","15x15_medium":"15×15 Vừa","15x15_hard":"15×15 Khó","10x10_medium_no_loops":"10×10 Vừa, không có vòng"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"difficulty":{"name":"Độ khó","choice":{"easy":"Dễ","medium":"Vừa","hard":"Khó"}},"allow_loops":{"name":"Cho phép vòng"},"max_bridges_per_direction":{"name":"Số cầu tối đa mỗi hướng","choice":{"1":"1","2":"2","3":"3","4":"4"}},"of_island_squares":{"name":"% ô là đảo","choice":{"5":"5%","10":"10%","15":"15%","20":"20%","25":"25%","30":"30%"}},"expansion_factor":{"name":"Hệ số giãn (%)","choice":{"0":"0%","10":"10%","20":"20%","30":"30%","40":"40%","50":"50%","60":"60%","70":"70%","80":"80%","90":"90%","100":"100%"}}},"action":{"e":{"label":"Xóa","title":"Kéo từ một hòn đảo để gỡ các cây cầu của nó theo hướng đó (E)"},"g":{"label":"Đường dẫn","title":"Hiện hoặc ẩn đường mờ ở mọi chỗ có thể bắc cầu (G)"}},"achievement":{"no_markers":{"name":"Sông nước thông thoáng","description":"Giải câu đố 10×10 trở lên mà không vẽ một dấu \\"không có cầu\\" nào."},"sure_footing":{"name":"Vững chân","description":"Giải câu đố 10×10 Khó trở lên mà không gỡ cây cầu nào hay dùng Hoàn tác."}}},"cube":{"name":"Lăn khối","description":"Lăn một khối đa diện quanh lưới để thu mọi ô xanh lên các mặt của nó.","preset":{"cube":"Lập phương","tetrahedron":"Tứ diện","octahedron":"Bát diện","icosahedron":"Nhị thập diện"},"config":{"type_of_solid":{"name":"Loại khối","choice":{"tetrahedron":"Tứ diện","cube":"Lập phương","octahedron":"Bát diện","icosahedron":"Nhị thập diện"}},"width_top":{"name":"Chiều rộng / cạnh trên"},"height_bottom":{"name":"Chiều cao / cạnh dưới"}},"achievement":{"short_haul":{"name":"Đường ngắn","description":"Hoàn thành khối Lập phương với mọi mặt xanh trong không quá hai mươi lần lăn."},"octahedron_ace":{"name":"Tám mặt thần tốc","description":"Hoàn thành khối Bát diện với mọi mặt xanh trong không quá ba mươi lần lăn."},"scenic_route":{"name":"Vòng quanh thế giới","description":"Lăn khối ít nhất hai trăm lần rồi mới có mọi mặt xanh."}}},"dominosa":{"name":"Dominosa","description":"Tìm vị trí của bộ quân domino đã bị xáo trộn trong một lưới số.","preset":{"up_to_double_3":"Đến đôi 3","up_to_double_4":"Đến đôi 4","up_to_double_5":"Đến đôi 5","up_to_double_6":"Đến đôi 6","up_to_double_7":"Đến đôi 7","up_to_double_8":"Đến đôi 8","up_to_double_9":"Đến đôi 9"},"config":{"maximum_number_on_dominoes":{"name":"Số lớn nhất trên quân domino"},"difficulty":{"name":"Độ khó","choice":{"very_easy":"Rất dễ","easy":"Dễ","hard":"Khó","extreme":"Cực khó","ambiguous":"Mơ hồ"}}},"achievement":{"no_lines":{"name":"Không cần bút chì","description":"Giải bộ đến đôi 6 trở lên mà không ghi chú bút chì một đường kẻ nào."},"one_click_each":{"name":"Mỗi quân một cú nhấp","description":"Giải bộ đến đôi 6 trở lên với một cú nhấp cho mỗi quân domino và không Hoàn tác."},"doubles_first":{"name":"Quân đôi trước","description":"Đặt mọi quân đôi trong bộ trước khi đặt bất kỳ quân domino nào khác."}}},"fifteen":{"name":"Mười lăm","alsoKnownAs":"Trò 15, xếp số trượt","description":"Trượt các mảnh để xếp chúng theo đúng thứ tự.","preset":{"3x3":"3×3","4x4":"4×4","5x5":"5×5"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"}},"achievement":{"short_shuffle":{"name":"Gọn gàng","description":"Xếp đúng thứ tự lưới 4×4 trong 100 nước trở xuống."},"five_flyer":{"name":"Tia chớp 5×5","description":"Xếp đúng thứ tự lưới 5×5 trong chưa đầy ba phút."},"scenic_route":{"name":"Đường vòng ngắm cảnh","description":"Dùng hơn 300 nước để xếp đúng thứ tự lưới 3×3."}}},"filling":{"name":"Lấp số","alsoKnownAs":"Fillomino","description":"Điền kín lưới sao cho mỗi nhóm chữ số giống nhau có đúng bấy nhiêu ô.","preset":{"9x7":"9×7","13x9":"13×9","17x13":"17×13"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"}},"action":{"f":{"label":"Điền","title":"Kéo từ một chữ số để điền nó vào mọi ô bạn đi qua (F)"}},"achievement":{"in_ink":{"name":"Viết bằng mực","description":"Giải Lấp số mà không đổi hay xóa chữ số nào, và không Hoàn tác."},"one_stroke":{"name":"Một lần là xong","description":"Giải Lấp số 13×9 trở lên, viết mỗi khối chữ số chỉ trong một nước."}}},"flip":{"name":"Lật ô","alsoKnownAs":"Lights Out, Tắt đèn","description":"Thắp sáng mọi ô; mỗi lần nhấn cũng lật cả các ô xung quanh.","preset":{"3x3_crosses":"3×3 Chữ thập","4x4_crosses":"4×4 Chữ thập","5x5_crosses":"5×5 Chữ thập","3x3_random":"3×3 Ngẫu nhiên","4x4_random":"4×4 Ngẫu nhiên","5x5_random":"5×5 Ngẫu nhiên"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"shape_type":{"name":"Kiểu hình","choice":{"crosses":"Chữ thập","random":"Ngẫu nhiên"}}},"achievement":{"press_once":{"name":"Chỉ nhấn một lần","description":"Thắp sáng bàn chơi 4×4 trở lên mà không nhấn ô nào hai lần."},"fewest_presses":{"name":"Ít công nhất","description":"Thắp sáng bàn chơi 5×5 với số lần nhấn ít nhất có thể."}}},"flood":{"name":"Loang màu","alsoKnownAs":"Flood It","description":"Loang màu từ góc cho đến khi cả lưới cùng một màu, trong giới hạn số nước.","preset":{"12x12_easy":"12×12 Dễ","12x12_medium":"12×12 Vừa","12x12_hard":"12×12 Khó","16x16_medium":"16×16 Vừa","16x16_hard":"16×16 Khó","12x12_3_colours":"12×12, 3 màu","12x12_4_colours":"12×12, 4 màu"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"colours":{"name":"Số màu"},"extra_moves_permitted":{"name":"Số nước dư cho phép"}},"status":{"moves":"{n} / {limit} nước"},"achievement":{"spare_moves":{"name":"Dư dả nước đi","description":"Loang kín lưới mà vẫn còn dư ít nhất ba nước."},"beat_the_solver":{"name":"Thắng cả máy","description":"Loang kín lưới với ít nước hơn lời giải của máy."},"one_colour_short":{"name":"Chỉ thiếu một màu","description":"Hết nước đi khi trên lưới chỉ còn hai màu."}}},"galaxies":{"name":"Thiên hà","alsoKnownAs":"Spiral Galaxies, Tentai Show","description":"Chia lưới thành các vùng, mỗi vùng đối xứng qua dấu chấm duy nhất bên trong nó.","preset":{"7x7_medium":"7×7 Vừa","7x7_extreme":"7×7 Cực khó","10x10_medium":"10×10 Vừa","15x15_medium":"15×15 Vừa"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"difficulty":{"name":"Độ khó","choice":{"medium":"Vừa","extreme":"Cực khó"}}},"achievement":{"no_arrows":{"name":"Không cần mũi tên","description":"Giải Thiên hà 10×10 trở lên mà không kéo ra một mũi tên nào."},"steady_hand":{"name":"Sao cố định","description":"Giải Thiên hà 10×10 trở lên mà không xóa bức tường nào hay dùng Hoàn tác."}}},"guess":{"name":"Đoán màu","alsoKnownAs":"Mastermind","description":"Suy ra hàng chốt màu bị giấu dựa vào các dấu chấm điểm cho mỗi lần đoán.","preset":{"standard":"Tiêu chuẩn","super":"Siêu cấp"},"config":{"colours":{"name":"Số màu"},"pegs_per_guess":{"name":"Số chốt mỗi lần đoán"},"guesses":{"name":"Số lần đoán"},"allow_blanks":{"name":"Cho phép ô trống"},"allow_duplicates":{"name":"Cho phép trùng màu"}},"action":{"k":{"label":"Giữ","title":"Nhấp vào một chốt trong hàng của bạn để mang nó sang lần đoán tiếp theo (K)"},"l":{"label":"Chữ cái","title":"Ghi chữ cái lên các chốt (L)"}},"status":{"revealed":"Đã hiện lời giải","solved":{"other":"Giải được sau {n} lần đoán"},"outOfGuesses":"Hết lượt đoán: lời giải đã được hiện ra","guessN":"Lần đoán {n}/{total}"},"achievement":{"five_guesses":{"name":"Phá mã","description":"Tìm ra hàng bị giấu trong năm lần đoán trở xuống."},"super_sleuth":{"name":"Siêu thám tử","description":"Tìm ra hàng năm chốt bị giấu ở chế độ Siêu cấp trong sáu lần đoán trở xuống."},"so_near":{"name":"Suýt nữa thôi","description":"Hết lượt đoán khi mọi chốt trừ một đều đúng chỗ."}}},"inertia":{"name":"Quán tính","description":"Cho viên bi trượt quanh lưới để nhặt hết đá quý mà không đụng phải mìn.","preset":{"10x8":"10×8","15x12":"15×12","20x16":"20×16"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"}},"status":{"gems":"Đá quý: {n}","deaths":" · Số lần chết: {n}"},"achievement":{"hat_trick":{"name":"Cú hat-trick","description":"Nhặt ba viên đá quý trở lên chỉ với một lần lăn bi."},"shortcut":{"name":"Đường tắt","description":"Nhặt hết đá quý trên bàn chơi 15×12 trở lên với ít lần lăn hơn Giải."},"last_gem_mine":{"name":"Chiến thắng cay đắng","description":"Lăn vào mìn trong chính lần lăn nhặt được viên đá quý cuối cùng."}}},"keen":{"name":"Lồng số","alsoKnownAs":"KenKen, Calcudoku","description":"Điền hình vuông Latin sao cho mỗi lồng đúng với manh mối phép tính của nó.","preset":{"4x4_easy":"4×4 Dễ","5x5_easy":"5×5 Dễ","5x5_easy_x_only":"5×5 Dễ, chỉ ×","6x6_easy":"6×6 Dễ","6x6_medium":"6×6 Vừa","6x6_medium_x_only":"6×6 Vừa, chỉ ×","6x6_hard":"6×6 Khó","6x6_expert":"6×6 Chuyên gia","6x6_extreme":"6×6 Cực khó","9x9_medium":"9×9 Vừa"},"config":{"grid_size":{"name":"Kích thước lưới"},"difficulty":{"name":"Độ khó","choice":{"easy":"Dễ","medium":"Vừa","hard":"Khó","expert":"Chuyên gia","extreme":"Cực khó"}},"multiplication_only":{"name":"Chỉ phép nhân"}},"action":{"m":{"label":"Ghi chú","title":"Ghi chú bút chì mọi khả năng vào mọi ô trống (M)"},"l":{"label":"Tô sáng","title":"Làm nổi bật mọi ô chứa chữ số bạn chạm vào gần nhất (L)"}},"achievement":{"no_pencil":{"name":"Tính nhẩm","description":"Giải Lồng số 6×6 trở lên mà không ghi chú bút chì nào."},"products_only":{"name":"Toàn phép nhân","description":"Giải Lồng số 6×6 Vừa chỉ có phép nhân."}}},"lightup":{"name":"Thắp đèn","alsoKnownAs":"Akari","description":"Đặt bóng đèn sao cho mọi ô đều sáng và không bóng nào chiếu vào bóng khác.","preset":{"7x7_easy":"7×7 Dễ","7x7_medium":"7×7 Vừa","7x7_hard":"7×7 Khó","10x10_easy":"10×10 Dễ","10x10_medium":"10×10 Vừa","10x10_hard":"10×10 Khó","14x14_easy":"14×14 Dễ","14x14_medium":"14×14 Vừa","14x14_hard":"14×14 Khó"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"of_black_squares":{"name":"% ô đen"},"symmetry":{"name":"Đối xứng","choice":{"none":"Không","2_way_mirror":"Gương 2 chiều","2_way_rotational":"Xoay 2 chiều","4_way_mirror":"Gương 4 chiều","4_way_rotational":"Xoay 4 chiều"}},"difficulty":{"name":"Độ khó","choice":{"easy":"Dễ","medium":"Vừa","hard":"Khó"}}},"action":{"x":{"label":"Gạch chéo","title":"Nhấp để đặt dấu gạch chéo thay vì bóng đèn (X)"}},"achievement":{"no_crosses":{"name":"Chỉ có đèn","description":"Giải Thắp đèn 10×10 trở lên mà không vẽ một dấu gạch chéo nào."},"no_takebacks":{"name":"Ý tưởng sáng chói","description":"Giải Thắp đèn Khó mà không bao giờ gỡ bóng đèn nào."}}},"loopy":{"name":"Vòng khép kín","alsoKnownAs":"Slitherlink","description":"Vẽ một vòng khép kín duy nhất sao cho mỗi con số đếm đúng số đoạn quanh nó.","preset":{"7x7_squares_easy":"7×7 Ô vuông Dễ","10x10_squares_easy":"10×10 Ô vuông Dễ","7x7_squares_medium":"7×7 Ô vuông Vừa","10x10_squares_medium":"10×10 Ô vuông Vừa","7x7_squares_expert":"7×7 Ô vuông Chuyên gia","10x10_squares_expert":"10×10 Ô vuông Chuyên gia","10x10_triangular_expert":"10×10 Tam giác Chuyên gia","12x10_honeycomb_expert":"12×10 Tổ ong Chuyên gia","7x7_snub_square_expert":"7×7 Vuông cắt vát Chuyên gia","9x9_cairo_expert":"9×9 Cairo Chuyên gia","5x4_great_hexagonal_expert":"5×4 Lục giác lớn Chuyên gia","7x7_octagonal_expert":"7×7 Bát giác Chuyên gia","5x5_kites_expert":"5×5 Cánh diều Chuyên gia","5x5_floret_expert":"5×5 Hoa thị Chuyên gia","5x4_dodecagonal_expert":"5×4 Thập nhị giác Chuyên gia","5x4_great_dodecagonal_expert":"5×4 Thập nhị giác lớn Chuyên gia","10x10_penrose_kite_dart_expert":"10×10 Penrose (diều/phi tiêu) Chuyên gia","10x10_penrose_rhombs_expert":"10×10 Penrose (hình thoi) Chuyên gia"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"grid_type":{"name":"Kiểu lưới","choice":{"squares":"Ô vuông","triangular":"Tam giác","honeycomb":"Tổ ong","snub_square":"Vuông cắt vát","cairo":"Cairo","great_hexagonal":"Lục giác lớn","octagonal":"Bát giác","kites":"Cánh diều","floret":"Hoa thị","dodecagonal":"Thập nhị giác","great_dodecagonal":"Thập nhị giác lớn","penrose_kite_dart":"Penrose (diều/phi tiêu)","penrose_rhombs":"Penrose (hình thoi)"}},"difficulty":{"name":"Độ khó","choice":{"easy":"Dễ","medium":"Vừa","hard":"Khó","expert":"Chuyên gia"}}},"action":{"x":{"label":"Gạch bỏ","title":"Nhấp để gạch bỏ cạnh thay vì vẽ đường (X)"}},"achievement":{"off_grid":{"name":"Ra khỏi ô vuông","description":"Giải Vòng khép kín trên bất kỳ kiểu lát nào khác ô vuông."},"no_crosses":{"name":"Chỉ có vòng","description":"Giải Vòng khép kín 10×10 mà không gạch bỏ cạnh nào."},"aperiodic":{"name":"Phi tuần hoàn","description":"Giải Vòng khép kín Penrose mà không bao giờ xóa một đoạn bạn đã vẽ."}}},"magnets":{"name":"Nam châm","description":"Đặt nam châm và ô trống vào các quân domino sao cho số cực khớp với manh mối.","preset":{"6x5_easy":"6×5 Dễ","6x5_hard":"6×5 Khó","6x5_hard_strip_clues":"6×5 Khó, lược bớt manh mối","8x7_easy":"8×7 Dễ","8x7_hard":"8×7 Khó","8x7_hard_strip_clues":"8×7 Khó, lược bớt manh mối","10x9_hard":"10×9 Khó","10x9_hard_strip_clues":"10×9 Khó, lược bớt manh mối"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"difficulty":{"name":"Độ khó","choice":{"easy":"Dễ","hard":"Khó"}},"strip_clues":{"name":"Lược bớt manh mối"}},"action":{"b":{"label":"Ô trống","title":"Nhấp để đánh dấu quân domino là ô trống thay vì đặt nam châm (B)"}},"achievement":{"no_flips":{"name":"Đúng chiều ngay","description":"Giải Nam châm 8×7 trở lên mà không bao giờ đảo chiều một nam châm."},"stripped":{"name":"Dây trần","description":"Giải Nam châm 10×9 Khó, lược bớt manh mối, trong chưa đầy mười phút."}}},"map":{"name":"Tô bản đồ","description":"Tô bản đồ bằng bốn màu sao cho không có hai vùng kề nhau nào trùng màu.","preset":{"20x15_easy_30_regions":"20×15 Dễ, 30 vùng","20x15_medium_30_regions":"20×15 Vừa, 30 vùng","20x15_hard_30_regions":"20×15 Khó, 30 vùng","20x15_extreme_30_regions":"20×15 Cực khó, 30 vùng","30x25_medium_75_regions":"30×25 Vừa, 75 vùng","30x25_hard_75_regions":"30×25 Khó, 75 vùng"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"regions":{"name":"Số vùng"},"difficulty":{"name":"Độ khó","choice":{"easy":"Dễ","medium":"Vừa","hard":"Khó","extreme":"Cực khó"}}},"action":{"l":{"label":"Số","title":"Hiện một con số trong mỗi vùng (L)"}},"achievement":{"no_dots":{"name":"Tấm bản đồ vẽ tay","description":"Giải Tô bản đồ Khó trở lên mà không ghi chú một chấm màu nào."},"steady_brush":{"name":"Cọ vững tay","description":"Giải Tô bản đồ Cực khó mà không bao giờ đổi màu một vùng."}}},"mines":{"name":"Dò mìn","alsoKnownAs":"Minesweeper","description":"Mở mọi ô không có mìn; bạn không bao giờ phải đoán mò.","preset":{"9x9_beginner_10_mines":"9×9 Người mới, 10 mìn","9x9_35_mines":"9×9, 35 mìn","16x16_intermediate_40_mines":"16×16 Trung cấp, 40 mìn","16x16_99_mines":"16×16, 99 mìn","30x16_expert_99_mines":"30×16 Chuyên gia, 99 mìn","30x16_170_mines":"30×16, 170 mìn"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"mines":{"name":"Số mìn"},"ensure_solubility":{"name":"Đảm bảo giải được"}},"status":{"marked":"Đã cắm cờ: {n} / {total}","deaths":" · Số lần chết: {n}"},"achievement":{"no_flags":{"name":"Không cờ","description":"Thắng một ván Dò mìn mà không cắm lá cờ nào."},"expert_sweep":{"name":"Đội phá bom","description":"Thắng bàn chơi Chuyên gia 30×16 trong chưa đầy năm phút."},"so_close":{"name":"Gần lắm rồi","description":"Đạp phải mìn khi chỉ còn không quá ba ô an toàn chưa mở."}}},"net":{"name":"Nối mạng","alsoKnownAs":"NetWalk","description":"Xoay các mảnh cho đến khi mảnh nào cũng được nối dây về tâm.","preset":{"5x5":"5×5","7x7":"7×7","9x9":"9×9","11x11":"11×11","13x11":"13×11","5x5_wrapping":"5×5 nối vòng","7x7_wrapping":"7×7 nối vòng","9x9_wrapping":"9×9 nối vòng","11x11_wrapping":"11×11 nối vòng","13x11_wrapping":"13×11 nối vòng"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"walls_wrap_around":{"name":"Mép nối vòng"},"barrier_probability":{"name":"Xác suất có rào chắn"},"ensure_unique_solution":{"name":"Đảm bảo lời giải duy nhất"}},"action":{"k":{"label":"Khóa","title":"Nhấp vào mảnh để khóa hoặc mở khóa thay vì xoay nó (K)"},"j":{"label":"Xáo trộn","title":"Xoay ngẫu nhiên mọi mảnh chưa khóa (J)"},"scroll_left":{"label":"←","title":"Cuộn khung nhìn sang trái (Shift+←)"},"scroll_up":{"label":"↑","title":"Cuộn khung nhìn lên trên (Shift+↑)"},"scroll_down":{"label":"↓","title":"Cuộn khung nhìn xuống dưới (Shift+↓)"},"scroll_right":{"label":"→","title":"Cuộn khung nhìn sang phải (Shift+→)"}},"status":{"active":"Đã có điện: {n}/{total}"},"achievement":{"no_locks":{"name":"Không ổ khóa","description":"Giải Nối mạng 9×9 trở lên mà không khóa mảnh nào."},"not_a_turn_wasted":{"name":"Không phí một vòng xoay","description":"Giải Nối mạng 9×9 trở lên mà không xoay mảnh nào nhiều hơn mức cần."},"jumbled":{"name":"Lộn tùng phèo","description":"Nhấn Xáo trộn mà vẫn giải được câu đố."}}},"netslide":{"name":"Trượt mạng","description":"Trượt các hàng và cột mảnh mạng cho đến khi mọi thứ được nối với nhau.","preset":{"3x3_easy":"3×3 dễ","3x3_medium":"3×3 vừa","3x3_hard":"3×3 khó","4x4_easy":"4×4 dễ","4x4_medium":"4×4 vừa","4x4_hard":"4×4 khó","5x5_easy":"5×5 dễ","5x5_medium":"5×5 vừa","5x5_hard":"5×5 khó"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"walls_wrap_around":{"name":"Mép nối vòng"},"barrier_probability":{"name":"Xác suất có rào chắn"},"number_of_shuffling_moves":{"name":"Số nước xáo trộn"}},"status":{"active":" · Đã có điện: {n}/{total}"},"achievement":{"tidy_four":{"name":"Đi dây gọn gàng","description":"Giải Trượt mạng 4×4 trong 18 lần trượt trở xuống."},"lean_five":{"name":"Thợ đường dây","description":"Giải Trượt mạng 5×5 trong 32 lần trượt trở xuống."},"big_switch":{"name":"Cú bật công tắc","description":"Thắp sáng cả mạng chỉ bằng một lần trượt khi mạng còn sáng chưa tới một nửa."}}},"pattern":{"name":"Tô tranh","alsoKnownAs":"Nonogram, Picross, Griddlers","description":"Tô kín lưới dựa vào độ dài các dải ô được cho ở mỗi hàng và mỗi cột.","preset":{"10x10":"10×10","15x15":"15×15","20x20":"20×20","25x25":"25×25","30x30":"30×30"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"}},"action":{"e":{"label":"Xóa","title":"Nhấp hoặc kéo để đưa ô về trạng thái chưa biết (E)"}},"achievement":{"no_dots":{"name":"Không một dấu chấm","description":"Giải Tô tranh 15×15 trở lên mà không đánh dấu chấm nào."},"inked_in":{"name":"Tô bằng mực","description":"Giải Tô tranh 20×20 trở lên mà không bao giờ xóa một ô đen."}}},"pearl":{"name":"Ngọc trai","alsoKnownAs":"Masyu","description":"Vẽ một vòng khép kín duy nhất đi thẳng qua ngọc trắng và rẽ tại ngọc đen.","preset":{"6x6_easy":"6×6 Dễ","6x6_tricky":"6×6 Hóc búa","8x8_easy":"8×8 Dễ","8x8_tricky":"8×8 Hóc búa","10x10_easy":"10×10 Dễ","10x10_tricky":"10×10 Hóc búa","12x8_easy":"12×8 Dễ","12x8_tricky":"12×8 Hóc búa"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"difficulty":{"name":"Độ khó","choice":{"easy":"Dễ","tricky":"Hóc búa"}},"allow_unsoluble":{"name":"Cho phép không giải được"}},"action":{"x":{"label":"Gạch chéo","title":"Nhấp hoặc kéo để gạch bỏ những cạnh mà vòng không thể dùng (X)"}},"achievement":{"no_crosses":{"name":"Chuỗi ngọc","description":"Giải Ngọc trai 10×10 mà không gạch bỏ cạnh nào."},"one_stroke":{"name":"Một nét liền","description":"Vẽ cả vòng của Ngọc trai 8×8 trở lên chỉ bằng một lần kéo."}}},"pegs":{"name":"Nhảy chốt","alsoKnownAs":"Peg solitaire, cờ nhảy","description":"Cho các chốt nhảy qua nhau cho đến khi chỉ còn lại một chốt.","preset":{"cross":"Chữ thập","octagon":"Bát giác","random_5x5":"Ngẫu nhiên 5×5","random_7x7":"Ngẫu nhiên 7×7","random_9x9":"Ngẫu nhiên 9×9"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"board_type":{"name":"Kiểu bàn chơi","choice":{"cross":"Chữ thập","octagon":"Bát giác","random":"Ngẫu nhiên"}}},"status":{"stuck":"Hết nước đi — còn {n} chốt","playing":"Chốt còn lại: {n}  ·  Số nước: {moves}"},"achievement":{"dead_centre":{"name":"Chính giữa hồng tâm","description":"Hoàn thành bàn Chữ thập với chốt cuối cùng ở lỗ chính giữa."},"hopscotch":{"name":"Nhảy lò cò","description":"Thắng một ván Nhảy chốt với một chốt nhảy bốn lần liên tiếp."},"pegged_out":{"name":"Kẹt cứng","description":"Hết nước đi khi còn mười chốt trở lên trên bàn."}}},"range":{"name":"Tầm nhìn","alsoKnownAs":"Kurodoko, Kuromasu","description":"Tô đen các ô sao cho mỗi con số nhìn thấy đúng bấy nhiêu ô trắng dọc theo hàng và cột của nó.","preset":{"9x6":"9×6","12x8":"12×8","13x9":"13×9","16x11":"16×11"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"}},"action":{"e":{"label":"Xóa","title":"Nhấp hoặc kéo để xóa ô đen và dấu chấm (E)"}},"achievement":{"no_dots":{"name":"Tương phản thuần khiết","description":"Giải Tầm nhìn 13×9 trở lên mà không ghi chú dấu chấm nào."},"quick_sight":{"name":"Mắt tinh","description":"Giải Tầm nhìn 16×11 trong chưa đầy năm phút."}}},"rect":{"name":"Hình chữ nhật","alsoKnownAs":"Shikaku","description":"Chia lưới thành các hình chữ nhật, mỗi hình chứa một con số bằng đúng diện tích của nó.","preset":{"7x7":"7×7","9x9":"9×9","11x11":"11×11","13x13":"13×13","15x15":"15×15","17x17":"17×17","19x19":"19×19"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"expansion_factor":{"name":"Hệ số giãn"},"ensure_unique_solution":{"name":"Đảm bảo lời giải duy nhất"}},"action":{"e":{"label":"Xóa","title":"Kéo qua một vùng để xóa các đường bên trong, hoặc nhấp vào một đường để gỡ nó (E)"}},"status":{"drag":"{w}×{h} "},"achievement":{"clean_cuts":{"name":"Nhát cắt gọn","description":"Giải Hình chữ nhật 11×11 trở lên với số nước không nhiều hơn số con số."},"quick_carver":{"name":"Thợ cắt nhanh tay","description":"Giải Hình chữ nhật 19×19 trong chưa đầy mười phút."}}},"samegame":{"name":"Cùng màu","alsoKnownAs":"Same Game, Clickomania","description":"Dọn sạch bàn chơi bằng cách xóa các nhóm ô cùng màu nằm sát nhau.","preset":{"5x5_3_colours":"5×5, 3 màu","10x5_3_colours":"10×5, 3 màu","15x10_3_colours":"15×10, 3 màu","15x10_4_colours":"15×10, 4 màu","20x15_4_colours":"20×15, 4 màu"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"no_of_colours":{"name":"Số màu"},"scoring_system":{"name":"Cách tính điểm","choice":{"n_1_2":"(n-1)^2","n_2_2":"(n-2)^2"}},"ensure_solubility":{"name":"Đảm bảo giải được"}},"status":{"score":"Điểm: {n}","complete":"Đã dọn sạch bàn! {score}","stuck":"Hết nước đi. {score}","selected":"{score} · Đang chọn: {n} (+{points})"},"achievement":{"avalanche":{"name":"Lở tuyết","description":"Lấy đi một nhóm từ 25 ô trở lên trong một lần, rồi dọn sạch bàn chơi."},"no_pairs":{"name":"Cấm cặp đôi","description":"Dọn sạch bàn chơi 15×10 trở lên mà không bao giờ lấy đi một cặp."},"last_one":{"name":"Ô cuối cùng","description":"Hết nước đi khi chỉ còn đúng một ô trên bàn chơi."}}},"signpost":{"name":"Biển chỉ đường","description":"Nối các ô thành một đường đánh số liền mạch, mỗi bước đi theo một mũi tên.","preset":{"4x4":"4×4","4x4_free_ends":"4×4, đầu cuối tự do","5x5":"5×5","5x5_free_ends":"5×5, đầu cuối tự do","6x6":"6×6","7x7":"7×7"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"start_and_end_in_corners":{"name":"Bắt đầu và kết thúc ở góc"}},"action":{"b":{"label":"Tách","title":"Nhấp vào một ô để phá vỡ cả chuỗi của nó (B)"}},"achievement":{"unbroken":{"name":"Chuỗi không đứt","description":"Giải Biển chỉ đường mà không bao giờ tách hay thay một mắt xích."},"in_order":{"name":"Đi một mạch","description":"Giải Biển chỉ đường 6×6 trở lên, nối đường đi theo thứ tự từ 1 đến ngôi sao."},"star_first":{"name":"Ước nguyện sao trời","description":"Nối mắt xích đầu tiên vào ngôi sao, rồi giải câu đố."}}},"singles":{"name":"Loại số","alsoKnownAs":"Hitori","description":"Tô đen các ô sao cho không số nào lặp lại trong một hàng hay cột, mà lưới vẫn liền một khối.","preset":{"5x5_easy":"5×5 Dễ","5x5_tricky":"5×5 Hóc búa","6x6_easy":"6×6 Dễ","6x6_tricky":"6×6 Hóc búa","8x8_easy":"8×8 Dễ","8x8_tricky":"8×8 Hóc búa","10x10_easy":"10×10 Dễ","10x10_tricky":"10×10 Hóc búa","12x12_easy":"12×12 Dễ","12x12_tricky":"12×12 Hóc búa"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"difficulty":{"name":"Độ khó","choice":{"easy":"Dễ","tricky":"Hóc búa"}}},"achievement":{"no_circles":{"name":"Không cần khoanh","description":"Giải Loại số 8×8 trở lên mà không khoanh tròn số nào."},"sure_hand":{"name":"Tay chắc","description":"Giải Loại số 10×10 trở lên mà không khôi phục ô đã tô đen nào."}}},"sixteen":{"name":"Mười sáu","description":"Trượt nguyên hàng và cột vòng quanh lưới để xếp các mảnh theo thứ tự.","preset":{"3x3":"3×3","4x3":"4×3","4x4":"4×4","5x4":"5×4","5x5":"5×5"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"number_of_shuffling_moves":{"name":"Số nước xáo trộn"}},"achievement":{"lean_slides":{"name":"Trượt tiết kiệm","description":"Xếp đúng thứ tự lưới 4×4 trong 100 lần trượt trở xuống."},"five_in_200":{"name":"Bậc thầy sắp xếp","description":"Xếp đúng thứ tự lưới 5×5 trong 200 lần trượt trở xuống."},"round_the_doughnut":{"name":"Vòng quanh bánh vòng","description":"Trượt một hàng trọn một vòng cho đến khi nó về lại chỗ cũ."}}},"slant":{"name":"Đường chéo","alsoKnownAs":"Gokigen Naname","description":"Vẽ một đường chéo trong mỗi ô, khớp với các con số và không tạo thành vòng kín.","preset":{"5x5_easy":"5×5 Dễ","5x5_hard":"5×5 Khó","8x8_easy":"8×8 Dễ","8x8_hard":"8×8 Khó","12x10_easy":"12×10 Dễ","12x10_hard":"12×10 Khó"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"difficulty":{"name":"Độ khó","choice":{"easy":"Dễ","hard":"Khó"}}},"achievement":{"no_loops":{"name":"Không vòng","description":"Giải Đường chéo 8×8 trở lên mà không bao giờ khép một vòng."},"steady_hand":{"name":"Không đắn đo","description":"Giải Đường chéo 12×10 mà không quay lại đổi một đường."}}},"solo":{"name":"Sudoku","alsoKnownAs":"Solo","description":"Điền kín lưới sao cho mỗi hàng, cột và khối chứa mỗi chữ số đúng một lần.","preset":{"4x4_very_easy":"4×4 Rất dễ","6x6_easy":"6×6 Dễ","9x9_very_easy":"9×9 Rất dễ","9x9_easy":"9×9 Dễ","9x9_x_diagonal_easy":"9×9 Chéo X Dễ","9x9_medium":"9×9 Vừa","9x9_hard":"9×9 Khó","9x9_x_diagonal_hard":"9×9 Chéo X Khó","9x9_expert":"9×9 Chuyên gia","9x9_extreme":"9×9 Cực khó","9x9_killer":"9×9 Killer","9x9_jigsaw_easy":"9×9 Ghép hình Dễ","9x9_jigsaw_x_diagonal_easy":"9×9 Ghép hình Chéo X Dễ","9x9_jigsaw_hard":"9×9 Ghép hình Khó","12x12_easy":"12×12 Dễ","16x16_easy":"16×16 Dễ"},"config":{"columns_of_sub_blocks":{"name":"Số cột của khối con"},"rows_of_sub_blocks":{"name":"Số hàng của khối con"},"x_require_every_number_in_each_main_diagonal":{"name":"\\"X\\" (mỗi đường chéo chính phải có đủ mọi số)"},"jigsaw_irregularly_shaped_sub_blocks":{"name":"Ghép hình (khối con có hình dạng bất thường)"},"killer_digit_sums":{"name":"Killer (tổng chữ số)"},"symmetry":{"name":"Đối xứng","choice":{"none":"Không","2_way_rotation":"Xoay 2 chiều","4_way_rotation":"Xoay 4 chiều","2_way_mirror":"Gương 2 chiều","2_way_diagonal_mirror":"Gương chéo 2 chiều","4_way_mirror":"Gương 4 chiều","4_way_diagonal_mirror":"Gương chéo 4 chiều","8_way_mirror":"Gương 8 chiều"}},"difficulty":{"name":"Độ khó","choice":{"very_easy":"Rất dễ","easy":"Dễ","medium":"Vừa","hard":"Khó","expert":"Chuyên gia","extreme":"Cực khó"}}},"action":{"m":{"label":"Ghi chú","title":"Ghi chú bút chì mọi khả năng vào mọi ô trống (M)"},"l":{"label":"Tô sáng","title":"Làm nổi bật mọi ô chứa chữ số bạn chạm vào gần nhất (L)"}},"achievement":{"pen_only":{"name":"Bút mực, không bút chì","description":"Giải Sudoku 9×9 Vừa, Killer hoặc khó hơn mà không ghi chú bút chì nào."},"no_second_thoughts":{"name":"Không nghĩ lại","description":"Giải 9×9 Chuyên gia hoặc khó hơn mà không bao giờ đổi hay xóa một chữ số."}}},"tents":{"name":"Cắm lều","alsoKnownAs":"Tents and Trees","description":"Dựng một chiếc lều cạnh mỗi cái cây, không để hai lều nào chạm nhau.","preset":{"8x8_easy":"8×8 Dễ","8x8_tricky":"8×8 Hóc búa","10x10_easy":"10×10 Dễ","10x10_tricky":"10×10 Hóc búa","15x15_easy":"15×15 Dễ","15x15_tricky":"15×15 Hóc búa"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"difficulty":{"name":"Độ khó","choice":{"easy":"Dễ","tricky":"Hóc búa"}}},"achievement":{"no_grass":{"name":"Dựng lều hoàn hảo","description":"Giải Cắm lều 10×10 trở lên mà không đánh dấu ô nào là cỏ."},"no_strikes":{"name":"Trại viên vui vẻ","description":"Giải Cắm lều 15×15 mà không bao giờ dỡ một chiếc lều."}}},"towers":{"name":"Tòa tháp","alsoKnownAs":"Skyscrapers, nhà chọc trời","description":"Xây tháp sao cho mỗi manh mối ở mép đếm đúng số tháp nhìn thấy được từ đó.","preset":{"4x4_easy":"4×4 Dễ","5x5_easy":"5×5 Dễ","5x5_hard":"5×5 Khó","6x6_easy":"6×6 Dễ","6x6_hard":"6×6 Khó","6x6_expert":"6×6 Chuyên gia","6x6_extreme":"6×6 Cực khó"},"config":{"grid_size":{"name":"Kích thước lưới"},"difficulty":{"name":"Độ khó","choice":{"easy":"Dễ","hard":"Khó","expert":"Chuyên gia","extreme":"Cực khó"}}},"action":{"m":{"label":"Ghi chú","title":"Ghi chú bút chì mọi khả năng vào mọi ô trống (M)"},"l":{"label":"Tô sáng","title":"Làm nổi bật mọi ô chứa chữ số bạn chạm vào gần nhất (L)"}},"achievement":{"no_pencil":{"name":"Đường chân trời trong đầu","description":"Giải Tòa tháp 6×6 mà không ghi chú bút chì nào."},"clean_build":{"name":"Xây để trường tồn","description":"Giải Tòa tháp 6×6 Chuyên gia hoặc Cực khó mà không quay lại đổi một tòa tháp."},"tallest_first":{"name":"Cao nhất trước","description":"Dựng mọi tòa tháp cao nhất trước mọi tháp khác, rồi giải lưới."}}},"tracks":{"name":"Đường ray","alsoKnownAs":"Train Tracks","description":"Đặt một tuyến đường ray duy nhất từ lối vào đến lối ra, khớp với các con số.","preset":{"8x8_easy":"8×8 Dễ","8x8_tricky":"8×8 Hóc búa","10x8_easy":"10×8 Dễ","10x8_tricky":"10×8 Hóc búa","10x10_easy":"10×10 Dễ","10x10_tricky":"10×10 Hóc búa","15x10_easy":"15×10 Dễ","15x10_tricky":"15×10 Hóc búa","15x15_easy":"15×15 Dễ","15x15_tricky":"15×15 Hóc búa"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"difficulty":{"name":"Độ khó","choice":{"easy":"Dễ","tricky":"Hóc búa"}},"disallow_consecutive_1_clues":{"name":"Không cho hai manh mối 1 liền nhau"}},"action":{"e":{"label":"Xóa","title":"Nhấp hoặc kéo để xóa sạch ô (E)"}},"achievement":{"no_crosses":{"name":"Không gạch bỏ","description":"Giải Đường ray 10×10 trở lên mà không gạch bỏ ô hay cạnh nào."},"no_lift":{"name":"Hết tốc lực","description":"Giải Đường ray 15×10 trở lên mà không bao giờ gỡ thanh ray đã đặt."},"long_haul":{"name":"Chặng đường dài","description":"Đặt ray qua mười ô trong một lần kéo, rồi hoàn thành tuyến đường."}}},"twiddle":{"name":"Xoay ô","description":"Xoay các khối mảnh vuông để đưa các con số về lại đúng thứ tự.","preset":{"3x3_rows_only":"3×3 chỉ theo hàng","3x3_normal":"3×3 thường","3x3_orientable":"3×3 có hướng","4x4_normal":"4×4 thường","4x4_orientable":"4×4 có hướng","4x4_rotating_3x3_blocks":"4×4, xoay khối 3×3","5x5_rotating_3x3_blocks":"5×5, xoay khối 3×3","6x6_rotating_4x4_blocks":"6×6, xoay khối 4×4"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"rotating_block_size":{"name":"Kích thước khối xoay"},"one_number_per_row":{"name":"Mỗi hàng một số"},"orientation_matters":{"name":"Tính cả hướng"},"number_of_shuffling_moves":{"name":"Số nước xáo trộn"}},"action":{"t":{"label":"Thuận chiều","title":"Đổi chiều: nhấp để xoay theo chiều kim đồng hồ, nhấp chuột phải để xoay ngược chiều (T)"}},"achievement":{"few_turns":{"name":"Hai mươi vòng xoay","description":"Giải Xoay ô 3×3 thường trong 20 lần xoay trở xuống."},"perfect_ten":{"name":"Điểm mười","description":"Giải Xoay ô 3×3 thường trong 10 lần xoay trở xuống."},"dizzy":{"name":"Quay mòng mòng","description":"Xoay một khối cùng một chiều bốn lần liên tiếp, rồi giải câu đố."}}},"undead":{"name":"Xác sống","alsoKnownAs":"Haunted Mirror Maze","description":"Đặt ma, ma cà rồng và thây ma sao cho khớp với những gì nhìn thấy trong gương.","preset":{"4x4_easy":"4×4 Dễ","4x4_normal":"4×4 Thường","4x4_tricky":"4×4 Hóc búa","5x5_easy":"5×5 Dễ","5x5_normal":"5×5 Thường","5x5_tricky":"5×5 Hóc búa","7x7_easy":"7×7 Dễ","7x7_normal":"7×7 Thường"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"difficulty":{"name":"Độ khó","choice":{"easy":"Dễ","normal":"Thường","tricky":"Hóc búa"}}},"action":{"s":{"label":"Tầm nhìn","title":"Lần theo các đường nhìn qua một ô, hoặc từ một số ở mép (S)"}},"keypad":{"g":"Ma","v":"Ma cà rồng","z":"Thây ma"},"achievement":{"no_pencil":{"name":"Tin vào mắt mình","description":"Giải Xác sống 5×5 trở lên mà không ghi chú bút chì nào."},"fearless":{"name":"Không sợ hãi","description":"Giải Xác sống Hóc búa mà không quay lại đổi một quái vật."}}},"unequal":{"name":"Bất đẳng thức","alsoKnownAs":"Futoshiki","description":"Hoàn thành hình vuông Latin sao cho mọi dấu lớn hơn đều đúng.","preset":{"4x4_easy":"4×4 Dễ","5x5_easy":"5×5 Dễ","5x5_medium":"5×5 Vừa","5x5_medium_adjacent":"5×5 Vừa (Liền kề)","5x5_hard":"5×5 Khó","6x6_easy":"6×6 Dễ","6x6_medium":"6×6 Vừa","6x6_medium_adjacent":"6×6 Vừa (Liền kề)","6x6_hard":"6×6 Khó","7x7_medium":"7×7 Vừa","7x7_medium_adjacent":"7×7 Vừa (Liền kề)","7x7_hard":"7×7 Khó"},"config":{"mode":{"name":"Chế độ","choice":{"unequal":"Bất đẳng thức","adjacent":"Liền kề"}},"size_s_s":{"name":"Kích thước (s*s)"},"difficulty":{"name":"Độ khó","choice":{"very_easy":"Rất dễ","easy":"Dễ","medium":"Vừa","hard":"Khó","extreme":"Cực khó"}}},"action":{"m":{"label":"Ghi chú","title":"Ghi chú bút chì mọi khả năng vào mọi ô trống (M)"},"h":{"label":"Gợi ý","title":"Ghi chú bút chì những khả năng còn lại sau khi suy luận đơn giản (H)"},"l":{"label":"Tô sáng","title":"Làm nổi bật mọi ô chứa chữ số bạn chạm vào gần nhất (L)"}},"achievement":{"adjacent_bare":{"name":"Hàng xóm","description":"Giải Bất đẳng thức ở chế độ Liền kề mà không ghi chú bút chì nào."},"extreme_bare":{"name":"Tất cả trong đầu","description":"Giải Bất đẳng thức Cực khó mà không ghi chú bút chì nào."}}},"unruly":{"name":"Đen trắng","alsoKnownAs":"Binairo, Takuzu","description":"Tô mỗi ô đen hoặc trắng, mỗi hàng và cột có số ô hai màu bằng nhau và không bao giờ có ba ô cùng màu liền nhau.","preset":{"8x8_easy":"8×8 Dễ","8x8_normal":"8×8 Thường","10x10_easy":"10×10 Dễ","10x10_normal":"10×10 Thường","14x14_easy":"14×14 Dễ","14x14_normal":"14×14 Thường"},"config":{"width":{"name":"Chiều rộng"},"height":{"name":"Chiều cao"},"unique_rows_and_columns":{"name":"Hàng và cột không trùng nhau"},"difficulty":{"name":"Độ khó","choice":{"easy":"Dễ","normal":"Thường"}}},"action":{"e":{"label":"Xóa","title":"Nhấp vào một ô để xóa nó (E)"}},"achievement":{"no_threes":{"name":"Không bao giờ ba","description":"Giải Đen trắng 10×10 trở lên mà không bao giờ tạo ba ô liền nhau."},"first_time":{"name":"Trắng đen rõ ràng","description":"Giải Đen trắng 14×14 mà không quay lại đổi một ô."}}},"untangle":{"name":"Gỡ rối","alsoKnownAs":"Planarity","description":"Kéo các điểm đi khắp nơi cho đến khi không còn hai đường nào cắt nhau.","preset":{"6_points":"6 điểm","10_points":"10 điểm","15_points":"15 điểm","20_points":"20 điểm","25_points":"25 điểm"},"config":{"number_of_points":{"name":"Số điểm"}},"action":{"g":{"label":"Bắt lưới","title":"Đặt điểm vừa thả vào đúng nút lưới (G)"}},"achievement":{"one_touch":{"name":"Chạm nhẹ","description":"Gỡ rối 10 điểm trở lên mà không nhấc cùng một điểm hai lần."},"only_downhill":{"name":"Chỉ xuống dốc","description":"Gỡ rối 20 điểm trở lên mà không nước nào làm tăng số đường đỏ."}}}}`),$=JSON.parse('{"blackbox":{"step1":{"text":"Một viên bi đang trốn trong chiếc hộp 4×4 này. Hãy bắn tia laser vào từ các dấu chấm quanh mép, suy ra bi phải nằm ở đâu, đánh dấu nó rồi nhấn nút ở góc."},"step2":{"text":"Nhấp vào dấu chấm ở **mép trái, ngang với hàng thứ hai**. Tia bị bẻ cong trên đường đi và ló ra ở chỗ khác; hai đầu được ghi cùng một số."},"step3":{"text":"Giờ hãy bắn từ dấu chấm ở **đầu cột thứ hai**. Chữ **H** nghĩa là tia đâm thẳng vào một viên bi và không bao giờ ra được."},"step4":{"text":"Bắn cả dấu chấm ở **đầu cột thứ nhất** nữa. Chữ **R** nghĩa là tia bật ngược ra ngay, chuyện này xảy ra khi có một viên bi nằm chéo cạnh cửa bắn."},"step5":{"text":"Chữ R cho biết có một viên bi nằm chéo cạnh cột thứ nhất, còn chữ H đặt một viên thẳng xuống cột thứ hai: chỉ ô này thỏa cả hai."},"step6":{"text":"**Nhấp vào ô đó** để đánh dấu viên bi của bạn ở đấy."},"step7":{"text":"Đã đánh dấu đủ bi, nên **dấu tích ở góc trên bên trái** đã dùng được. Nhấp vào nó để kiểm tra đáp án."},"step8":{"text":"Chính xác. Trong lúc chơi, hãy **nhấp chuột phải** vào một ô để khóa nó lại khi bạn chắc chắn nó trống, còn **Giải** sẽ cho bạn xem đáp án."}},"bridges":{"step1":{"text":"Số trên mỗi đảo là số đầu cầu mà đảo đó cần. Hãy nối mọi đảo thành một mạng duy nhất, giữa hai đảo có tối đa hai cây cầu và không cây cầu nào cắt ngang cầu khác."},"step2":{"text":"Số **2 ở dưới cùng** chỉ có một đảo thẳng hàng với nó: số **4** ở trên. **Kéo** từ số 2 về phía số 4 để bắc một cây cầu qua."},"step3":{"text":"Đảo này cần hai đầu cầu, và cặp đảo này là nơi duy nhất có thể bắc. **Kéo** thêm lần nữa theo cùng hướng để có cây cầu thứ hai song song."},"step4":{"text":"Đảo đó đã xong. **Nhấp** vào nó để đánh dấu hoàn tất: đảo chuyển sang màu xám và các cây cầu của nó bị khóa, để bạn không lỡ tay làm xáo trộn."},"step5":{"text":"Không cây cầu nào được cắt cầu khác, nên đường nối giữa **hai số 1** giờ đã bị chặn. **Kéo chuột phải** từ số 1 bên trái sang số 1 bên phải để ghi chú điều đó."},"step6":{"text":"Giờ mỗi số 1 chỉ còn một lối ra, và bốn cây cầu còn lại cũng suy ra được từ đó. **Giải** sẽ hoàn thành câu đố (còn **G** hiện mọi đường có thể bắc cầu).","textTouch":"Giờ mỗi số 1 chỉ còn một lối ra, và bốn cây cầu còn lại cũng suy ra được từ đó. **Giải** sẽ hoàn thành câu đố."}},"cube":{"step1":{"text":"Khối lập phương có sáu mặt và có sáu ô được tô xanh. Hãy lăn khối cho đến khi mỗi mặt đều thu được một ô: mỗi lần khối chạm đất, mặt dưới và ô bên dưới đổi màu cho nhau."},"step2":{"text":"Mỗi cú nhấp sẽ lật khối qua cạnh, về phía ô bạn chọn. **Nhấp vào ô xanh ngay bên dưới khối** để mặt vừa úp xuống nhận lấy màu của ô đó."},"step3":{"text":"Ô vừa rời đi giờ đã trơn — màu thực sự được hoán đổi. **Nhấp vào ô xanh bên phải** để tô xanh mặt thứ hai."},"step4":{"text":"**Phím mũi tên** cũng lăn được khối. Nhấn **→** một lần để nhặt ô xanh thứ ba.","textTouch":"Mọi ô kề bên chỉ cách một lần chạm. **Chạm vào ô xanh tiếp theo bên phải** để nhặt ô xanh thứ ba."},"step5":{"text":"Ba mặt đã xanh, còn ba mặt nữa — bàn chơi này có thể xong trong tổng cộng sáu lần lăn, và thanh trạng thái đếm số lần đó. **Hoàn tác** lùi lại một nước khi bạn lăn quá tay."}},"dominosa":{"step1":{"text":"Ba quân domino — 0-0, 0-1 và 1-1 — đã được xếp ở đây rồi nhấc đi, chỉ để lại các con số. Hãy chia lưới thành từng cặp để đặt lại mỗi quân đúng một lần."},"step2":{"text":"Không quân domino nào được dùng hai lần. Ghép số **0** này với số **1** bên dưới sẽ khiến cả hai cột ngoài đều là 0-1, nên hãy **nhấp chuột phải** vào giữa chúng để ghi chú rằng chúng không phải một cặp."},"step3":{"text":"Hai số **0** duy nhất nằm sát nhau là cặp ở góc trên bên trái, nên quân 0-0 phải nằm đó. **Nhấp vào ranh giới giữa chúng** để đặt quân."},"step4":{"text":"Tương tự, hai số **1** duy nhất nằm sát nhau là cặp ở dưới bên trái. Nhấp vào ranh giới giữa chúng để đặt quân 1-1."},"step5":{"text":"Vậy cột bên phải dành cho quân 0-1. Nhấp vào ranh giới giữa hai số của cột đó để hoàn thành."},"step6":{"text":"Mỗi quân domino đều được dùng một lần. Nhấp lại vào một quân để nhấc nó ra, quân bị trùng sẽ hiện màu đỏ, và **Hoàn tác** lùi lại từng nước của bạn."}},"fifteen":{"step1":{"text":"Trượt các mảnh có số vào chỗ trống cho đến khi chúng xếp thành **1 đến 8** theo thứ tự, với chỗ trống ở góc dưới bên phải. Bàn chơi nhỏ này chỉ còn hai nước nữa là xong."},"step2":{"text":"Mảnh nào cùng hàng hoặc cùng cột với chỗ trống đều trượt được. Nhấp vào số **5** để đẩy nó lên chỗ trống."},"step3":{"text":"Thêm một nước nữa. Nhấp vào số **8** để hoàn thành hàng."},"step4":{"text":"Đã giải! **Hoàn tác** và **Làm lại** đi qua lại các nước của bạn, còn **Mới** trong menu tạm dừng tạo một câu đố mới. Phím mũi tên cũng trượt một mảnh vào chỗ trống theo hướng mũi tên.","textTouch":"Đã giải! **Hoàn tác** và **Làm lại** đi qua lại các nước của bạn, còn **Mới** trong menu tạm dừng tạo một câu đố mới. Cả hàng hoặc cả cột có thể trượt cùng lúc, nên hãy nhắm vào mảnh ở xa."}},"filling":{"step1":{"text":"Viết một chữ số vào mỗi ô trống sao cho mỗi khối liền nhau gồm các chữ số giống nhau phủ đúng số ô bằng chữ số đó."},"step2":{"text":"Số **3** ở chân cột giữa chỉ có thể mọc lên trên, nên khối của nó chính là cột đó. **Kéo** từ ô trên cùng của cột xuống ô giữa, rồi nhấn **3**.","textTouch":"Số **3** ở chân cột giữa chỉ có thể mọc lên trên. **Kéo** từ ô trên cùng của cột xuống ô giữa, rồi chạm **3** trên bàn phím số."},"step3":{"text":"Số **2** ở cột trái cần một ô đi cùng và ô phía trên nó là ô trống duy nhất. Nhấp vào ô đó và nhấn **2**.","textTouch":"Số **2** ở cột trái cần một ô đi cùng và ô phía trên nó là ô trống duy nhất. Chạm vào ô đó, rồi chạm **2** trên bàn phím số."},"step4":{"text":"Còn một ô. Nhấp vào nó và nhấn **1** để xem một chữ số sai trông thế nào.","textTouch":"Còn một ô. Chạm vào nó, rồi chạm **1** trên bàn phím số để xem một chữ số sai trông thế nào."},"step5":{"text":"Màu đỏ nghĩa là không thể: hai số **1** đó chạm nhau, tạo thành một khối hai ô, và số **2** ở trên cùng bị vây kín. Ô đó vẫn đang được chọn, nên hãy nhấn **Backspace** để xóa trống nó.","textTouch":"Màu đỏ nghĩa là không thể: hai số **1** đó chạm nhau, tạo thành một khối hai ô, và số **2** ở trên cùng bị vây kín. Ô đó vẫn đang được chọn, nên hãy chạm **⌫** trên bàn phím số để xóa trống nó."},"step6":{"text":"Ô trống đó sẽ ghép cặp với số **2** phía trên nó. Nhấp vào nó và nhấn **2** để hoàn thành lưới.","textTouch":"Ô trống đó sẽ ghép cặp với số **2** phía trên nó. Chạm vào nó, rồi chạm **2** trên bàn phím số để hoàn thành lưới."},"step7":{"text":"Đã điền kín. Các đường đậm bao quanh mỗi khối đã hoàn chỉnh; **nhấp chuột phải** thêm từng ô vào vùng chọn, và **Hoàn tác** lấy lại một lần điền."}},"flip":{"step1":{"text":"Thắp sáng cả chín ô. Nhấn một ô sẽ lật ô đó **và** các ô quanh nó, nên ô đã sáng có thể tối lại."},"step2":{"text":"Hình vẽ nhỏ trong mỗi ô cho biết nó lật những ô nào: khối tô đặc là chính ô đó, các khối viền là ô lân cận."},"step3":{"text":"Đến lúc thắp sáng ô này. Nhấn ô **trên cùng bên trái**, ô tối ở góc."},"step4":{"text":"Góc đã sáng, nhưng hai ô bên cạnh lại tối đi. Tiếp theo hãy nhấn ô **chính giữa**."},"step5":{"text":"Giờ chỉ còn góc dưới bên phải là tối. Nhấn ô **dưới cùng bên phải** để hoàn thành."},"step6":{"text":"Sáng hết rồi! **Hoàn tác** lấy lại một lần nhấn, và bạn có thể điều khiển con trỏ bằng phím mũi tên rồi nhấn Enter thay cho việc nhấp chuột.","textTouch":"Sáng hết rồi! **Hoàn tác** lấy lại một lần nhấn, và nhấn cùng một ô hai lần luôn triệt tiêu nhau, nên thứ tự không bao giờ quan trọng."}},"flood":{"step1":{"text":"Bạn sở hữu ô trên cùng bên trái và mọi ô cùng màu nối liền với nó. Mỗi nước sẽ tô lại mảng đó, nên các ô kề bên có màu mới sẽ nhập vào. Hãy làm cả lưới thành một màu trong giới hạn **bốn nước**."},"step2":{"text":"Lúc này mảng của bạn chỉ là một góc xanh dương. Nhấp vào ô **đỏ** bên cạnh: mảng chuyển sang màu đỏ và mọi ô đỏ nó chạm tới đều nhập vào."},"step3":{"text":"Giờ hãy nhấp vào một ô **xanh dương** ở rìa mảng. Một màu được chọn khéo có thể lan rất xa khắp lưới chỉ trong một nước."},"step4":{"text":"Bên ngoài mảng chỉ còn màu **xanh lá**. Thêm một cú nhấp nữa là quét hết phần còn lại của lưới."},"step5":{"text":"Ba nước trên bốn — thanh trạng thái luôn đếm số nước. Hết nước trước khi lưới đồng màu là thua ván đó. Bí rồi? Một **Gợi ý** sẽ đi giúp bạn một màu hay, còn **Giải** sẽ hoàn thành lưới bằng cách tự giải."}},"galaxies":{"step1":{"text":"Hai dấu chấm, vậy là hai thiên hà. Hãy vẽ tường dọc theo đường lưới sao cho mỗi dấu chấm nằm ở tâm vùng của riêng nó: xoay vùng đó 180° quanh dấu chấm thì nó phải trùng khít với chính nó."},"step2":{"text":"Dấu chấm bên trái nằm trên đường giữa hai ô, nên thiên hà của nó phải là hai cột bên trái. **Nhấp** vào đường lưới ngay bên phải hai cột đó, ở **hàng trên cùng**."},"step3":{"text":"Dấu chấm còn dùng làm giấy nháp. **Kéo** từ dấu chấm bên phải vào **ô trên cùng bên phải** để để lại một mũi tên ở đó, đánh dấu ô này thuộc thiên hà của nó."},"step4":{"text":"Quay lại bức tường: **nhấp** vào cùng đường lưới đó, thấp hơn một hàng, ở **hàng giữa**."},"step5":{"text":"Còn một đoạn, ở **hàng dưới cùng**. **Nhấp** vào nó để khép kín cả hai thiên hà."},"step6":{"text":"Cả hai vùng đều được tô, nghĩa là cả hai đều đúng. **Giải** vẽ ra toàn bộ lời giải, và nhấp vào một bức tường sẽ xóa nó đi."}},"guess":{"step1":{"text":"Hai chốt đang bị giấu sau các dấu hỏi, theo một thứ tự nào đó của ba màu. Hãy đoán một hàng, đọc các dấu chấm điểm nó nhận được, rồi thu hẹp dần."},"step2":{"text":"**Kéo** màu trên cùng ra khỏi khay và thả vào **lỗ bên trái** của hàng có mũi tên."},"step3":{"text":"Bạn cũng có thể chọn màu trước rồi nhấp vào các lỗ. Nhấp vào **màu thứ hai** trong khay."},"step4":{"text":"Giờ hãy nhấp vào **lỗ bên phải** để thả màu đó vào."},"step5":{"text":"Hàng đã đầy, nên **ô viền nét đứt** bên phải nó sáng lên. Nhấp vào đó để chấm lần đoán."},"step6":{"text":"Hai dấu **rỗng** nghĩa là cả hai màu đều có trong đáp án nhưng không màu nào đúng chỗ — dấu đặc mới là đúng màu, đúng chỗ. Hãy đổi chỗ chúng rồi gửi lại."},"step7":{"text":"Đã giải. **Giải** là chịu thua và xem đáp án, còn phím **L** ghi chữ cái lên các chốt nếu màu khó phân biệt.","textTouch":"Đã giải. **Giải** là chịu thua và xem đáp án, còn **Giữ** cạnh nút Hoàn tác giữ nguyên chốt bạn tin chắc cho lần đoán tiếp theo."}},"inertia":{"step1":{"text":"Bạn là viên bi ở góc trên bên trái, và có **ba viên đá quý** cần nhặt. Một khi đã lăn, bi chỉ dừng lại khi gặp tường hoặc điểm dừng — còn gặp mìn thì bi tan xác."},"step2":{"text":"Nhấp vào một ô ở **bên phải** viên bi. Nó lăn về hướng đó cho đến khi mép bàn chơi chặn lại, nhặt luôn viên đá quý trên đường."},"step3":{"text":"Giờ hãy nhấp vào **bên dưới** viên bi. Nó nhặt viên đá quý tiếp theo, và vòng tròn đứt nét cách hai ô bên dưới — một điểm dừng — khiến nó dừng lại."},"step4":{"text":"Cẩn thận: vật có gai ngay bên dưới viên bi là một quả **mìn**. Lăn vào nó là thua, và chỉ có Hoàn tác mới cứu được bạn."},"step5":{"text":"Thay vào đó hãy đi **chéo**: nhấp vào ô cách hai ô xuống dưới và hai ô sang trái, viên bi sẽ trượt qua quả mìn tới viên đá quý cuối cùng."},"step6":{"text":"Đủ cả ba viên đá quý — xong. **Hoàn tác** tua lại một lần lăn hỏng; phím mũi tên lăn thẳng, còn Home, Page Up, End và Page Down lăn chéo.","textTouch":"Đủ cả ba viên đá quý — xong. **Hoàn tác** tua lại một lần lăn hỏng, và chạm ra ngoài lưới cũng được, rất tiện khi viên bi nằm sát mép."}},"keen":{"step1":{"text":"Điền 1, 2 và 3 sao cho mỗi số xuất hiện một lần trong mỗi hàng và cột, và các chữ số trong mỗi lồng viền đậm cho ra đúng manh mối phép tính của lồng đó."},"step2":{"text":"Lồng **2×** có tích bằng 2, nên các chữ số của nó là 1, 1 và 2. Một lồng được lặp chữ số, nhưng không được lặp trong cùng hàng hay cột, nên số 2 thuộc về ô góc: nhấp vào ô đó và gõ **2**.","textTouch":"Lồng **2×** có tích bằng 2, nên các chữ số của nó là 1, 1 và 2. Số 2 thuộc về ô góc: chạm vào ô đó, rồi chạm **2** trên bàn phím số."},"step3":{"text":"Hai ô còn lại của lồng là các số 1. Nhấp vào ô **bên phải số 2** và gõ **1**.","textTouch":"Hai ô còn lại của lồng là các số 1. Chạm vào ô **bên phải số 2**, rồi chạm **1** trên bàn phím số."},"step4":{"text":"Hàng trên cùng đã có số 2 và số 1, nên ô cuối cùng của hàng phải là 3. Nhấp vào **ô trên cùng bên phải** và gõ **3**.","textTouch":"Hàng trên cùng đã có số 2 và số 1, nên ô cuối cùng của hàng phải là 3. Chạm vào **ô trên cùng bên phải**, rồi chạm **3** trên bàn phím số."},"step5":{"text":"Mới chỉ đoán thôi? **Nhấp chuột phải** vào ô giữa và gõ **3** để ghi chú bút chì chữ số đó thay vì điền hẳn vào.","textTouch":"Mới chỉ đoán thôi? **Nhấn giữ** ô giữa rồi chạm **3** để ghi chú chữ số đó thay vì điền hẳn vào. Phím **✎** cũng làm như vậy cho ô bạn đã chạm."},"step6":{"text":"Giải phần còn lại theo cách tương tự; chữ số bị lặp trong hàng hoặc cột sẽ chuyển đỏ, lồng đã đầy mà sai manh mối cũng vậy. Trong menu tạm dừng, **Ghi chú** ghi bút chì mọi khả năng giúp bạn, còn **Giải** sẽ cho bạn xem đáp án."}},"lightup":{"step1":{"text":"Mọi ô trắng cuối cùng đều phải được chiếu sáng. Một bóng đèn chiếu sáng hàng và cột của nó cho đến khi gặp ô đen chắn lại, và không bóng nào được nằm trong vùng sáng của bóng khác."},"step2":{"text":"Con số cho biết có bao nhiêu bóng đèn chạm vào ô đen đó. Số **2** này chỉ có hai ô trắng kề bên, nên cả hai đều có bóng: nhấp vào ô **bên phải** nó."},"step3":{"text":"Để ý lớp màu vàng lan dọc theo tia sáng. Giờ hãy nhấp vào ô ngay **bên dưới** số 2 để đặt bóng thứ hai."},"step4":{"text":"Số **0** không chạm bóng nào cả. **Nhấp chuột phải** vào ô phía trên nó để ghi chú một dấu gạch chéo: nó chỉ nhắc bạn rằng không thể đặt bóng ở đó."},"step5":{"text":"Số **1** cần đúng một bóng. Ô bên dưới nó đã được chiếu sáng, nên đặt bóng ở đó sẽ nằm trong tia sáng — hãy nhấp vào ô **bên trái** số 1."},"step6":{"text":"Hai ô ở hàng trên cùng vẫn còn tối và bạn đã gạch một ô. Nhấp vào ô **còn lại**."},"step7":{"text":"Mọi ô đều sáng, mọi con số đều thỏa. **Hoàn tác** lấy lại một bóng đèn, còn phím mũi tên cùng Enter và Space giúp đặt bóng và dấu gạch mà không cần chuột.","textTouch":"Mọi ô đều sáng, mọi con số đều thỏa. **Hoàn tác** lấy lại một bóng đèn, còn nhấn giữ sẽ gạch bỏ bất kỳ ô nào bạn đã loại trừ."}},"loopy":{"step1":{"text":"Vẽ **một** vòng khép kín dọc theo các đường mờ giữa các dấu chấm. Mỗi con số cho biết vòng đi qua bao nhiêu trong bốn cạnh của ô chứa nó."},"step2":{"text":"Ô giữa có số **4**, nên cả bốn cạnh của nó đều thuộc vòng. **Nhấp** vào cạnh trên của nó để vẽ đoạn đầu tiên."},"step3":{"text":"Giờ là **cạnh trái**. Nhấp lại vào một đoạn sẽ xóa nó đi."},"step4":{"text":"Mỗi dấu chấm có hai đoạn hoặc không có đoạn nào, và dấu chấm nơi hai đoạn đó gặp nhau đã đủ. **Nhấp chuột phải** vào đoạn chạy lên từ dấu chấm đó để gạch bỏ vì không dùng được."},"step5":{"text":"Còn hai cạnh. **Nhấp** vào cạnh dưới của ô giữa."},"step6":{"text":"Và **cạnh phải** khép kín vòng. Một vòng, không đầu thừa, và bốn số **0** đều không bị đụng tới."},"step7":{"text":"Đã giải. **Hoàn tác** lùi lại từng đoạn bạn vẽ, còn **Loại** trong menu tạm dừng đổi ô vuông thành tam giác, lục giác và những kiểu lát lạ hơn."}},"magnets":{"step1":{"text":"Mỗi quân domino hoặc là một nam châm, với một nửa **+** và một nửa **−**, hoặc là ô trống. Các con số đếm số cực **+** (trên và trái) và cực **−** (dưới và phải) của mỗi hàng, cột, và hai cực cùng dấu không bao giờ được chạm nhau."},"step2":{"text":"Hàng dưới cùng cần ba cực **−** và chỉ có ba quân domino chạm tới hàng đó, nên mỗi quân phải góp một cực. **Nhấp chuột trái** vào nửa trên của quân domino đứng để biến nó thành **+**, đẩy cực **−** xuống dưới."},"step3":{"text":"Vậy quân domino nằm ngang ở dưới bên phải cũng là nam châm, và số **0** phía trên cột cuối cấm cực **+** ở đó. **Nhấp chuột trái** vào nửa trái của nó để đặt cực **+** ở bên đó."},"step4":{"text":"Cột thứ tư giờ đã có một cực **+** và không cần cực **−** nào, nên quân domino phía trên không thể là cả hai. **Nhấp chuột phải** vào nó để đánh dấu là ô trống."},"step5":{"text":"Hàng trên cùng vẫn cần một cực **+** và một cực **−** từ quân domino nằm ngang bên trái. Nửa phải của nó chạm một cực **+**, và hai cực cùng dấu không được chạm nhau — nên hãy **nhấp chuột trái** vào nửa trái."},"step6":{"text":"Còn một quân domino. Cột đầu tiên đã dùng cực **+** ở trên cùng, nên cực **+** ở đây thuộc về bên phải: **nhấp chuột trái** vào nửa phải để hoàn thành."},"step7":{"text":"Đã giải! Nhấp lại vào cùng một nửa sẽ đảo chiều nam châm, nhấp chuột phải lần thứ hai để lại dấu hỏi nghĩa là \\"nam châm, nhưng chiều nào?\\", và **Hoàn tác** lùi lại một bước."}},"map":{"step1":{"text":"Tô màu mọi vùng sao cho không có hai vùng chung một đoạn biên nào trùng màu. Bốn màu luôn là đủ, và ở đây còn ba vùng chưa tô."},"step2":{"text":"Trước hết hãy chọn một màu: **nhấp** vào **ô màu xanh dương**, ô thứ hai trong hàng dưới bản đồ."},"step3":{"text":"Khi đã cầm một màu, **nhấp chuột phải** vào một vùng trống sẽ ghi chú một chấm màu đó — ghi chú rằng vùng này *có thể* là màu đó. Hãy thử trên vùng cao chạy dọc bên phải."},"step4":{"text":"Không chỉ là có thể: vùng đó đã giáp đỏ, xanh lá và vàng, nên chỉ còn xanh dương. **Nhấp** vào nó để tô."},"step5":{"text":"Bạn cũng có thể **kéo** màu từ vùng này sang vùng khác. Vùng lớn chạy ngang phía trên giờ đã giáp đỏ, xanh lá và xanh dương, nên hãy **kéo** màu vàng lên đó từ vùng nhỏ ở dưới."},"step6":{"text":"Còn một vùng trống, ở **góc dưới bên trái**: nó giáp xanh lá, xanh dương và màu vàng mới tô, nên phải là đỏ. **Kéo** màu đỏ xuống đó từ vùng ở góc trên bên phải."},"step7":{"text":"Xong — nếu có xung đột, một dấu **!** đỏ sẽ hiện trên biên giữa hai vùng. **Hoàn tác** lùi lại một bước, còn phím mũi tên cùng **1**–**4** giúp tô màu mà không cần chuột.","textTouch":"Xong — nếu có xung đột, một dấu **!** đỏ sẽ hiện trên biên giữa hai vùng. **Hoàn tác** lùi lại một bước, còn ô tẩy ở cuối hàng màu xóa màu một vùng mà bạn đổi ý."}},"mines":{"step1":{"text":"Mỗi con số đếm số mìn trong tám ô xung quanh nó. Có hai quả mìn nằm dưới khối ô đang che; hãy mở hết các ô còn lại mà không đạp phải quả nào."},"step2":{"text":"Số **1** này chỉ chạm một ô đang che, nên ô đó là mìn. **Nhấp chuột phải** vào nó để cắm cờ."},"step3":{"text":"Số **1** bên dưới giờ đã có một quả mìn được cắm cờ, nên các ô xung quanh còn lại của nó đều an toàn. **Nhấp chuột trái vào số 1 đó** để mở hết chúng cùng lúc."},"step4":{"text":"Số **2** phía trên khối đã tính một lá cờ và chỉ còn một ô đang che. **Nhấp chuột phải** vào ô đó."},"step5":{"text":"Cả hai quả mìn đều đã cắm cờ, nên ô che cuối cùng chắc chắn an toàn. **Nhấp chuột trái** vào nó để hoàn thành lưới."},"step6":{"text":"Dọn sạch rồi. Nhấp chuột phải lần nữa sẽ gỡ cờ, và **Hoàn tác** cứu bạn nếu lỡ đạp phải mìn."}},"net":{"step1":{"text":"Mỗi mảnh mang một đoạn dây, và cả mạng đã bị xoay ngẫu nhiên. Hãy xoay các mảnh cho đến khi cả chín mảnh đều nối vào mảnh được đánh dấu ở giữa: dây **xanh dương** đã có điện, dây xám thì chưa."},"step2":{"text":"Mảnh dưới cùng bên trái đang chĩa dây thẳng vào tường. **Nhấp chuột trái** vào nó để xoay một phần tư vòng ngược chiều kim đồng hồ, để dây nối tới mảnh bên phải."},"step3":{"text":"**Nhấp chuột phải** xoay mảnh theo chiều ngược lại. Xoay mảnh dưới cùng bên phải một lần theo chiều kim đồng hồ và dây của nó sẽ quay sang trái."},"step4":{"text":"Mảnh giữa có dây ở cả bốn phía, nên không thể sai. **Nhấp chuột giữa** vào nó để khóa lại, hoặc bật **ổ khóa** cạnh nút Hoàn tác rồi nhấp vào nó: mảnh bị khóa sẽ được tô bóng và không xoay nữa.","textTouch":"Mảnh giữa có dây ở cả bốn phía, nên không thể sai. Bật **ổ khóa** cạnh nút Hoàn tác rồi chạm vào mảnh đó để khóa lại: mảnh bị khóa sẽ được tô bóng và không xoay nữa."},"step5":{"text":"Còn một mảnh. Khi đã tắt **ổ khóa**, **nhấp chuột trái** vào góc trên bên phải để đưa dây của nó quay sang trái và thắp sáng cả mạng.","textTouch":"Còn một mảnh. Khi đã tắt **ổ khóa**, chạm vào góc trên bên phải để đưa dây của nó quay sang trái và thắp sáng cả mạng."},"step6":{"text":"Cả chín mảnh đều có điện. **Hoàn tác** lùi lại từng lần xoay; với bàn phím, phím mũi tên di chuyển con trỏ còn **A**, **D** và **F** xoay mảnh dưới con trỏ.","textTouch":"Cả chín mảnh đều có điện. **Hoàn tác** lùi lại từng lần xoay, khóa mảnh bạn đã chắc chắn sẽ giữ nó an toàn khỏi những cú chạm nhầm, và **Xáo trộn** xoay lại mọi mảnh chưa khóa."}},"netslide":{"step1":{"text":"Mọi đoạn dây cuối cùng đều phải nối về nguồn điện. Dây xanh dương là có điện, dây xám vẽ bút chì là chưa."},"step2":{"text":"Nguồn nằm ở mảnh chính giữa. Mảnh đó không bao giờ di chuyển, nên hàng và cột giữa không có mũi tên — mọi thứ khác đều trượt vòng quanh."},"step3":{"text":"Nhấp vào mũi tên **bên trái hàng dưới cùng** để trượt hàng đó sang trái một bước; đoạn dây rơi ra sẽ xuất hiện lại ở bên phải."},"step4":{"text":"Hàng dưới cùng giờ đã nối liền, nhưng vẫn còn màu xám: chưa có gì nối nó lên nguồn."},"step5":{"text":"**Nhấp chuột phải** vào mũi tên **phía trên cột thứ ba**. Nhấp chuột phải sẽ đảo chiều mũi tên, nên cột đó trượt xuống và các đoạn dây cuối cùng sáng lên."},"step6":{"text":"Có điện hết rồi! **Giải** hiện một lời giải nếu bạn bí, còn menu **Loại** có những lưới nối vòng, nơi dây chạy ra khỏi một mép sẽ sang mép đối diện."}},"pattern":{"step1":{"text":"Các con số bên cạnh mỗi hàng và cột là độ dài các dải ô đen của nó, theo thứ tự. Hãy suy ra ô nào đen và tô chúng."},"step2":{"text":"**Cột thứ ba** ghi 1 2: một ô đen, một khoảng trống, rồi hai ô đen. Trong bốn ô thì chỉ có một cách xếp, với cặp ô ở dưới cùng. **Kéo** xuống qua hai ô đó."},"step3":{"text":"Vậy ô ngay trên cặp đó là khoảng trống. **Nhấp chuột phải** vào nó để đánh dấu chấm, nghĩa là ô bạn biết chắc là trắng."},"step4":{"text":"Và ô trên cùng của cột đó chính là ô đen lẻ của manh mối. **Nhấp** vào nó."},"step5":{"text":"**Cột cuối cùng** ghi 3. Dải ba ô nằm ở đâu trong bốn ô thì cũng luôn phủ hai ô giữa, nên hãy **kéo** xuống qua hai ô đó."},"step6":{"text":"Manh mối chuyển xám khi hàng hoặc cột của nó đã xong. Cứ tiếp tục gỡ dần như vậy, hoặc để **Giải** hoàn thành câu này; nhấp chuột giữa sẽ đưa một ô về trạng thái chưa biết."}},"pearl":{"step1":{"text":"Vẽ một vòng khép kín nối từ tâm ô này sang tâm ô kia. Vòng không cần đi qua mọi ô, nhưng phải đi qua mọi viên ngọc."},"step2":{"text":"**Ngọc trắng** nghĩa là vòng đi thẳng qua nó. Ở hàng trên cùng chỉ có thể đi thẳng theo chiều ngang, nên hãy **kéo** từ ô bên trái viên ngọc sang ô bên phải nó."},"step3":{"text":"Viên ngọc đó đã đủ hai đoạn, nên không đoạn nào khác được rời khỏi nó. **Nhấp chuột phải** vào cạnh bên dưới nó để gạch bỏ phía đó."},"step4":{"text":"**Ngọc đen** là chỗ rẽ, và sau đó vòng đi thẳng qua ô ở mỗi bên. Viên ở **mép trái** không thể rẽ xuống — như vậy cần một đường thẳng qua góc dưới bên trái — nên hãy **nhấp** vào cạnh phải của nó."},"step5":{"text":"Vậy ô bên cạnh nó đi thẳng tiếp — và viên ngọc trắng phía sau cũng vậy. **Kéo** từ ô đó sang tới cột thứ tư."},"step6":{"text":"Cứ tiếp tục suy luận từ các viên ngọc; viên nào bị phạm luật sẽ hiện quầng đỏ ngay lập tức. **Giải** vẽ cả vòng nếu bạn muốn xem."}},"pegs":{"step1":{"text":"Một chốt nhảy qua chốt bên cạnh vào lỗ trống phía sau, và chốt bị nhảy qua sẽ bị lấy đi. Hãy dọn bàn chơi nhỏ này cho đến khi còn **một chốt**: ba lần nhảy."},"step2":{"text":"**Kéo** chốt ở đầu thân xuống, nhảy qua chốt bên cạnh, vào lỗ ở dưới cùng."},"step3":{"text":"Nhấp cũng được. Nhấp vào **chốt bên phải** để nhấc nó lên, rồi nhấp vào lỗ cách nó hai ô về bên trái."},"step4":{"text":"Lần nhảy cuối: kéo chốt ở **góc dưới bên trái** nhảy qua chốt bên cạnh vào giữa."},"step5":{"text":"Còn một chốt — đã giải. **Hoàn tác** lấy lại một lần nhảy khi bạn tự dồn mình vào thế bí, và phím mũi tên cũng dùng được: Enter nhấc chốt lên, rồi một phím mũi tên đẩy nó đi.","textTouch":"Còn một chốt — đã giải. **Hoàn tác** lấy lại một lần nhảy mỗi khi bạn tự dồn mình vào thế bí, lùi xa bao nhiêu tùy thích."}},"range":{"step1":{"text":"Tô đen các ô sao cho mỗi con số đếm đúng số ô trắng mà ô của nó nhìn thấy: chính nó, cộng với mọi ô thẳng hàng lên, xuống, trái, phải cho đến khi gặp ô đen hoặc mép lưới."},"step2":{"text":"Số **6** lúc này nhìn thấy sáu ô — cả hàng của nó cộng với hai ô bên dưới. Vậy không ô nào trong hàng hay cột đó được tô đen."},"step3":{"text":"Số **2** chỉ được thấy chính nó và thêm một ô, mà ô phía trên nó phải giữ trắng cho số 6. Vậy hãy **nhấp** vào ô bên trái nó để tô đen."},"step4":{"text":"Vậy ô trên cùng bên phải là ô trắng duy nhất số 2 còn nhìn thấy. **Nhấp chuột phải** vào nó để ghi chú một dấu chấm, cách ghi lại một ô bạn biết chắc vẫn trắng."},"step5":{"text":"Số **3** đã nhìn thấy chính nó và hai ô bên trái, nên ô bên phải nó phải đen. **Nhấp** vào ô đó."},"step6":{"text":"Xong với hai ô đen — các dấu chấm chỉ là ghi chú. **H** điền một ô suy ra được từ phần còn lại, còn **Giải** chấm kín cả lưới.","textTouch":"Xong với hai ô đen — các dấu chấm chỉ là ghi chú. **Giải** chấm kín cả lưới khi bạn muốn xem đáp án."}},"rect":{"step1":{"text":"Cắt lưới này thành các hình chữ nhật sao cho mỗi hình chứa đúng một con số, và con số đó bằng số ô hình chữ nhật phủ."},"step2":{"text":"Mỗi hình chữ nhật chỉ chứa một con số, mà số **3** lại nằm ngay dưới số **4** — nên số 4 phải lấy cả hàng trên cùng. **Kéo** từ số 4 sang đầu bên phải của hàng đó."},"step3":{"text":"Nhấp vào một đường lưới sẽ thêm hoặc bỏ đúng cạnh đó. **Nhấp** vào đường ở bên phải số **3**."},"step4":{"text":"Số 9 chỉ có thể là một khối 3×3, và chỉ còn một chỗ cho nó. **Kéo** qua khối được làm nổi bật, từ ô trên cùng bên trái tới góc dưới bên phải: việc này cũng khoanh luôn số 3 lại."},"step5":{"text":"Mọi ô đều nằm trong một hình chữ nhật đúng kích thước. **Kéo chuột phải** sẽ xóa các đường bên trong một vùng nhưng giữ lại đường bao, và **Hoàn tác** lấy lại một nét vẽ."}},"samegame":{"step1":{"text":"Dọn sạch bàn chơi bằng cách lấy đi các nhóm từ hai ô cùng màu nằm sát nhau trở lên. Một nhóm _n_ ô được (_n_ − 2)² điểm, nên nhóm lớn mới đáng giá."},"step2":{"text":"Nhấp vào một trong bốn ô **đỏ** ở hàng trên cùng. Cú nhấp đầu tiên chỉ chọn nhóm: nhóm sáng lên và có viền đậm."},"step3":{"text":"Nhấp lại vào nhóm đã chọn để nhấc nó khỏi bàn chơi và ghi bốn điểm. Các ô phía trên chỗ trống sẽ rơi xuống, và cột trống sẽ kéo các cột bên cạnh dồn sang."},"step4":{"text":"Ô **xanh lá** này đứng một mình. Không ô nào bên cạnh cùng màu, nên nó không bao giờ được chọn — nó phải chờ đến khi bàn chơi dồn một ô cùng màu tới cạnh nó."},"step5":{"text":"Giờ đến **cặp xanh dương** được làm nổi bật ở đây. Nhấp vào một trong hai ô để chọn cả hai."},"step6":{"text":"Đổi ý rồi? **Nhấp chuột phải** vào vùng chọn để bỏ chọn — chưa có gì bị xóa cho đến khi bạn nhấp vào nó lần thứ hai."},"step7":{"text":"Trò chơi chỉ có vậy thôi. Bàn chơi nào cũng dọn sạch được, nên cứ tiếp tục — **Hoàn tác** tua lại khi bạn để sót một ô lẻ, và không có nút Giải nào cứu bạn đâu."}},"signpost":{"step1":{"text":"Mỗi ô mang một mũi tên. Hãy nối cả sáu ô thành một chuỗi đánh số **1 đến 6**, trong đó ô tiếp theo của mỗi ô nằm đâu đó dọc theo mũi tên của nó."},"step2":{"text":"Số **1** chỉ sang phải. **Kéo** từ nó vào ô bên phải để biến ô đó thành số 2."},"step3":{"text":"Số **3** tự móc vào, như mọi cặp số liên tiếp chỉ đúng hướng. Giờ hãy **kéo** ô dưới cùng bên phải vào ô bên trái nó."},"step4":{"text":"Cả hai ô đó chưa có số, nên cặp này được ghi là **a** và **a+1**. **Nhấp chuột phải** vào ô giữa của hàng dưới cùng để tách chúng ra."},"step5":{"text":"Số thật thì tốt hơn: **kéo** số **3** vào ô bên dưới nó, ô đó sẽ thành số 4."},"step6":{"text":"Mắt xích cuối: **kéo** số 4 đó vào ô bên trái nó. Ô đó thành số 5, và số 6 tự khép lại đường đi."},"step7":{"text":"Đã giải. **Kéo chuột phải** sẽ nối theo chiều ngược lại, từ một ô về ô đứng trước nó, còn **Giải** vẽ ra toàn bộ đường đi."}},"singles":{"step1":{"text":"Tô đen các ô cho đến khi không số nào lặp lại giữa các ô trắng của bất kỳ hàng hay cột nào. Hai ô đen không bao giờ được chung cạnh, và các ô trắng phải liền thành một vùng."},"step2":{"text":"Hai số **4** ở hàng này cách nhau một ô. Tô đen ô đó sẽ để cả hai số 4 cùng trắng, nên chính nó phải trắng — **nhấp chuột phải** vào nó để khoanh tròn."},"step3":{"text":"Số **3** được khoanh tròn đó chắc chắn trắng, và cột của nó còn một số 3 khác ở trên cùng. **Nhấp chuột trái** vào số trên cùng để tô đen."},"step4":{"text":"Ô đen không bao giờ chạm nhau, nên số **4** ngay bên phải nó vẫn trắng. **Nhấp chuột trái** vào số 4 còn lại ở cột cuối đó."},"step5":{"text":"Tương tự: số **2** ngay trên ô đen mới của bạn là trắng, và hàng của nó còn một số 2 khác ở tận bên trái. **Nhấp chuột trái** vào số đó."},"step6":{"text":"Còn một ô. Số **3** trên ô đen đó là trắng, nên số 3 kia ở chân cột phải bị loại. **Nhấp chuột trái** vào nó."},"step7":{"text":"Đã giải, và các ô trắng vẫn liền một khối. Vòng tròn chỉ là ghi chú, và **Hoàn tác** lùi lại từng nước của bạn."}},"sixteen":{"step1":{"text":"Xếp các mảnh theo thứ tự, **1 đến 9**, đọc từ trái sang phải. Các mũi tên quanh mép trượt cả một hàng hoặc cột đi một bước, và mảnh nào rơi ra sẽ quay lại ở phía bên kia."},"step2":{"text":"Nhấp vào mũi tên **phía trên cột thứ hai** để trượt cột đó lên một bước; việc này hoàn thành hàng giữa."},"step3":{"text":"Giờ hàng dưới cùng cần dịch sang phải. **Nhấp chuột phải** vào mũi tên **bên trái hàng dưới cùng**: nhấp chuột phải đẩy hàng theo chiều ngược lại."},"step4":{"text":"Nước cuối: nhấp vào mũi tên **bên trái hàng trên cùng** để trượt nó sang trái và hoàn thành lưới."},"step5":{"text":"Đúng thứ tự rồi! **Loại** trong menu tạm dừng có những lưới lớn hơn, và **Tùy chỉnh…** trong đó có thể xáo một lưới với số nước xáo trộn định sẵn để bạn gỡ lại."}},"slant":{"step1":{"text":"Vẽ một đường chéo qua mỗi ô. Mỗi con số trong vòng tròn đếm số đường chạm vào góc của nó, và các đường không bao giờ được khép thành vòng."},"step2":{"text":"Số **0** ở góc trên bên trái không muốn đường nào chạm vào, nên ô duy nhất của nó phải nghiêng theo chiều kia. **Nhấp chuột phải** vào ô đó để vẽ `/`."},"step3":{"text":"Số **4** cần một đường từ cả bốn ô quanh nó. **Nhấp chuột trái** vào ô phía trên bên trái nó — nhấp chuột trái vẽ `\\\\`."},"step4":{"text":"Ô phía trên bên phải số **4** thì phải nghiêng xuống về bên trái. **Nhấp chuột phải** vào nó để vẽ `/`."},"step5":{"text":"Số **1** ở mép trái đã có một đường duy nhất của nó, từ ô bên dưới. Vậy ô phía trên phải nghiêng ra xa: **nhấp chuột trái** vào nó để vẽ `\\\\`."},"step6":{"text":"Cứ tiếp tục như vậy. Con số nào không còn thỏa được sẽ chuyển đỏ, và đường nào nằm trong một vòng kín cũng vậy. **Giải** trong menu tạm dừng điền phần còn lại."}},"solo":{"step1":{"text":"Mỗi hàng, mỗi cột và mỗi **khối 2×2** có viền phải chứa 1, 2, 3 và 4, mỗi số đúng một lần. Lưới nhỏ này còn thiếu ba ô."},"step2":{"text":"**Khối** này đã có 2, 3 và 4, nên ô trống của nó chỉ có thể là **1**. Nhấp vào ô đó và nhấn phím **1**.","textTouch":"**Khối** này đã có 2, 3 và 4, nên ô trống của nó chỉ có thể là **1**. Chạm vào ô đó, rồi chạm **1** trên bàn phím số."},"step3":{"text":"Chưa chắc về một ô? **Nhấp chuột phải** vào ô trống này và nhấn **2** để ghi chú bút chì chữ số đó.","textTouch":"Chưa chắc về một ô? Chạm vào ô trống này, bật **✎** trên bàn phím số, rồi chạm **2** để ghi chú bút chì chữ số đó."},"step4":{"text":"Hàng của nó đã có 3, 4 và 1, nên ghi chú là đúng. **Nhấp chuột trái** vào cùng ô đó và nhấn **2** để điền đáp án.","textTouch":"Hàng của nó đã có 3, 4 và 1, nên ghi chú là đúng. Ô vẫn đang được chọn, nên hãy chạm **✎** để tắt bút chì rồi chạm **2** để điền đáp án."},"step5":{"text":"Còn một ô. Hàng của nó đã có 4, 3 và 1 — nhấp vào nó và nhấn chữ số còn thiếu.","textTouch":"Còn một ô. Hàng của nó đã có 4, 3 và 1 — chạm vào nó, rồi chạm chữ số còn thiếu trên bàn phím số."},"step6":{"text":"Đã giải! **Hoàn tác** lấy lại một chữ số sai, còn phím **M** ghi chú bút chì mọi khả năng vào mọi ô trống cùng lúc.","textTouch":"Đã giải! **Hoàn tác** lấy lại một chữ số sai, còn **Ghi chú** trong menu tạm dừng ghi bút chì mọi khả năng vào mọi ô trống cùng lúc."}},"tents":{"step1":{"text":"Dựng một chiếc lều cạnh mỗi cái cây — ở trên, dưới, trái hoặc phải nó, không bao giờ chéo. Không hai lều nào được chạm nhau, và các con số đếm số lều trong mỗi hàng và cột."},"step2":{"text":"Số **0** ở cuối hàng thứ hai nghĩa là hàng đó không có lều nào. **Nhấp chuột phải** vào ô cạnh cái cây để đánh dấu là cỏ."},"step3":{"text":"Cột thứ ba cũng trống. **Kéo chuột phải** từ ô trên cùng của nó xuống hàng thứ ba để đánh dấu cỏ cả ba ô một lượt."},"step4":{"text":"Cây ở dưới cùng bên phải nằm trong góc, cạnh một cây khác, nên ô trống duy nhất kề nó là ô phía trên. **Nhấp chuột trái** vào ô đó để dựng lều."},"step5":{"text":"Lều đó làm đầy hàng thứ ba, nên cây ở mép trái cũng không thể cắm lều bên dưới. **Nhấp chuột trái** vào ô trên cùng bên trái."},"step6":{"text":"Còn một cái cây chưa có lều, và chỉ ô bên trái nó còn trống. **Nhấp chuột trái** vào đó để hoàn thành khu cắm trại."},"step7":{"text":"Đã giải! Nhấp lại vào lều hoặc dấu cỏ sẽ xóa nó, phím mũi tên cùng Enter và Space làm được việc tương tự, và **Hoàn tác** lùi lại một bước.","textTouch":"Đã giải! Chạm lại vào lều hoặc dấu cỏ sẽ xóa nó, và **Hoàn tác** lùi lại một bước."}},"towers":{"step1":{"text":"Mỗi hàng và cột có một tòa tháp cho mỗi chiều cao, từ 1 đến 4. Một con số quanh mép đếm số tháp bạn **nhìn thấy** từ đó: tháp cao hơn che khuất mọi tháp thấp hơn phía sau nó."},"step2":{"text":"Số **1** ở bên phải hàng trên cùng nghĩa là từ phía đó chỉ nhìn thấy một tháp, nên tháp gần nhất phải là tháp cao nhất. Nhấp vào ô đó và nhấn **4**.","textTouch":"Số **1** ở bên phải hàng trên cùng nghĩa là từ phía đó chỉ nhìn thấy một tháp, nên tháp gần nhất phải là tháp cao nhất. Chạm vào ô đó, rồi chạm **4** trên bàn phím số."},"step3":{"text":"Bạn có thể ghi chú các khả năng thay vì điền đáp án. **Nhấp chuột phải** vào ô trống ở đầu trái hàng trên cùng và nhấn **1**.","textTouch":"Bạn có thể ghi chú các khả năng thay vì điền đáp án. Chạm vào ô trống ở đầu trái hàng trên cùng, bật **✎** trên bàn phím số và chạm **1**."},"step4":{"text":"Số **4** ở bên trái hàng cho biết cả bốn tháp đều nhìn thấy được, nên chúng tăng dần 1-2-3-4 từ phía đó. **Nhấp chuột trái** vào ô và nhấn **1** để điền đáp án.","textTouch":"Số **4** ở bên trái hàng cho biết cả bốn tháp đều nhìn thấy được, nên chúng tăng dần 1-2-3-4 từ phía đó. Ô vẫn đang được chọn, nên hãy chạm **✎** để tắt bút chì rồi chạm **1** để điền đáp án."},"step5":{"text":"Còn một ô, và số **1** bên cạnh hàng của nó lại đặt tháp cao nhất ở gần nhất. Nhấp vào nó và nhấn **4**.","textTouch":"Còn một ô, và số **1** bên cạnh hàng của nó lại đặt tháp cao nhất ở gần nhất. Chạm vào nó, rồi chạm **4** trên bàn phím số."},"step6":{"text":"Đã giải! **Backspace** xóa trống một ô bạn điền sai, còn **Giải** trong menu tạm dừng hoàn thành câu đố đã làm khó bạn.","textTouch":"Đã giải! **⌫** trên bàn phím số xóa trống một ô bạn điền sai. Trong menu tạm dừng, **Ghi chú** ghi bút chì mọi khả năng, còn **Giải** hoàn thành câu đố đã làm khó bạn."}},"tracks":{"step1":{"text":"Một tuyến đường ray chạy từ lối vào bên trái đến lối ra ở dưới cùng, và mỗi ô nó đi qua có đúng hai thanh ray. Các con số cho biết đường ray đi qua bao nhiêu ô của cột hoặc hàng đó."},"step2":{"text":"Đoạn ray ở lối vào đã chạy lên **ô trên cùng bên trái**, và cạnh trên và cạnh trái của ô đó là mép lưới. Vậy thanh ray thứ hai của nó phải đi sang phải: **nhấp** ngay bên phải tâm ô."},"step3":{"text":"**Cột trái** được đếm là **2** và lối vào đã dùng cả hai ô, nên không có gì chạy qua nửa dưới của cột. **Nhấp chuột phải** vào giữa một ô để gạch bỏ nó — kéo chuột phải sẽ gạch cả một dải."},"step4":{"text":"**Cột phải** được đếm là **4**, nên đường ray đi qua mọi ô của nó, và các ô ở trên cùng và dưới cùng chỉ có thể rẽ vào trong. **Kéo** từ ô trên cùng bên phải xuống tận ô dưới cùng bên phải."},"step5":{"text":"**Hàng dưới cùng** cần ba ô và cột trái đã xong, nên góc dưới bên phải nằm trên đường ray. Nó không thể ra khỏi lưới, nên rẽ trái và lên trên: **nhấp** vào cạnh trái của nó."},"step6":{"text":"Con số chuyển xám khi hàng hoặc cột của nó đã đúng và chuyển đỏ khi không thể thỏa. Hãy tiếp tục nối các đầu còn dở, hoặc để **Giải** hoàn thành tuyến đường ray."}},"twiddle":{"step1":{"text":"Đưa các con số về lại đúng thứ tự, **1 đến 9**. Mỗi nước xoay một khối vuông bốn mảnh đi một phần tư vòng; ba lần xoay là xong bàn chơi này."},"step2":{"text":"Nhấp vào giữa **bốn mảnh trên cùng bên trái**. Nhấp chuột trái xoay khối đó ngược chiều kim đồng hồ, đưa 1, 2, 3 lên hàng trên cùng."},"step3":{"text":"**Nhấp chuột phải** vào giữa **bốn mảnh dưới cùng bên phải** để xoay khối đó theo chiều kim đồng hồ."},"step4":{"text":"Kết thúc bằng một cú nhấp chuột trái vào giữa **bốn mảnh dưới cùng bên trái**."},"step5":{"text":"Xong! Menu **Loại** có các khối lớn hơn và chế độ *có hướng*, trong đó mỗi mảnh còn phải quay đúng chiều."}},"undead":{"step1":{"text":"Điền năm ô trống bằng ma, ma cà rồng và thây ma — bảng đếm ở trên cho biết mỗi loại có bao nhiêu con. Mỗi con số đếm số quái vật nhìn thấy khi nhìn dọc theo đường đó, và gương sẽ bẻ hướng nhìn của bạn."},"step2":{"text":"Nhìn vào từ **bên trái hàng trên cùng**, bạn không thấy gì; tấm gương bẻ chính đường nhìn đó ra phía trên, nơi số **1** thấy một con quái vật. Chỉ có ma là ẩn khi nhìn thẳng và hiện trong gương. **Nhấp** vào ô đó."},"step3":{"text":"Số **4** ở góc dưới bên trái đi zíc zắc qua các tấm gương, ngang qua ba ô và thấy hết cả ba. Ma cà rồng biến mất trong gương, nên con ma cà rồng duy nhất phải là ô giữa của cột trái. **Nhấp** vào nó."},"step4":{"text":"Nhấp chuột chỉ chuyển lần lượt qua các quái vật. Thay vào đó hãy **nhấn V**: G, V và Z đặt ngay ma, ma cà rồng hoặc thây ma vào ô đang được làm nổi bật.","textTouch":"Mỗi lần chạm chỉ chuyển qua một quái vật. Thay vào đó, hãy chạm **Ma cà rồng** trên bàn phím số: quái vật đó sẽ được đặt thẳng vào ô đang tô sáng."},"step5":{"text":"**Hàng giữa** là tầm nhìn thẳng, không có gương, và cả hai số **1** đều thấy đúng một quái vật — con ma cà rồng. Vậy hai ô bên cạnh nó phải là ma. **Nhấp** vào ô chính giữa."},"step6":{"text":"**Nhấp chuột phải** sẽ ghi chú bút chì một ghi chú nhỏ thay vì đặt quái vật. Hãy thử với ô bên phải của hàng đó; mỗi lần nhấp chuột phải thêm quái vật tiếp theo."},"step7":{"text":"Còn hai ô: ô có ghi chú bút chì là con ma thứ ba, còn ô cuối cùng là thây ma. Con số chuyển xám khi đường của nó đã ổn định; **Giải** hoàn thành mê cung nếu bạn muốn ngồi xem."}},"unequal":{"step1":{"text":"Mỗi hàng và cột cần có 1, 2, 3 và 4, mỗi số một lần — và mọi dấu giữa hai ô phải chĩa vào ô **nhỏ hơn** trong cặp."},"step2":{"text":"Dấu ở đây chĩa sang phải, nên ô **bên trái** là ô lớn hơn. Hàng này còn cần một số 2 và một số 3: nhấp vào ô bên trái và nhấn **3**.","textTouch":"Dấu ở đây chĩa sang phải, nên ô **bên trái** là ô lớn hơn. Hàng này còn cần một số 2 và một số 3: chạm vào ô bên trái, rồi chạm **3** trên bàn phím số."},"step3":{"text":"Ô được dấu chĩa vào nhận số nhỏ hơn. Nhấp vào nó và nhấn **2**.","textTouch":"Ô được dấu chĩa vào nhận số nhỏ hơn. Chạm vào nó, rồi chạm **2** trên bàn phím số."},"step4":{"text":"Cột của nó giờ đã có số 3, nên ô này chỉ có thể là 2. **Nhấp chuột phải** vào nó và nhấn **2** để ghi chú bút chì điều đó.","textTouch":"Cột của nó giờ đã có số 3, nên ô này chỉ có thể là 2. Chạm vào nó, bật **✎** trên bàn phím số và chạm **2** để ghi chú bút chì điều đó."},"step5":{"text":"Ghi chú chưa phải là đáp án. **Nhấp chuột trái** vào cùng ô đó và nhấn **2** để chốt lại.","textTouch":"Ghi chú chưa phải là đáp án. Ô vẫn đang được chọn, nên hãy chạm **✎** để tắt bút chì rồi chạm **2** để chốt lại."},"step6":{"text":"Còn một ô. Nhấp vào nó và nhấn **3** để hoàn thành hình vuông.","textTouch":"Còn một ô. Chạm vào nó, rồi chạm **3** trên bàn phím số để hoàn thành hình vuông."},"step7":{"text":"Đã giải! **Hoàn tác** lấy lại một chữ số, còn **Giải** điền đáp án nếu câu đố làm khó bạn.","textTouch":"Đã giải! **Hoàn tác** lấy lại một chữ số, **Ghi chú** và **Gợi ý** ghi bút chì các khả năng, còn **Giải** điền đáp án nếu câu đố làm khó bạn."}},"unruly":{"step1":{"text":"Tô mỗi ô đen hoặc trắng. Mỗi hàng và cột cần **ba ô mỗi màu**, và không màu nào được xuất hiện **ba ô liền nhau**. Còn ba ô chưa quyết định."},"step2":{"text":"Hàng này đã có đủ ba ô trắng, nên ô chưa quyết định phải là đen. **Nhấp chuột trái** vào nó: nhấp chuột trái tô đen."},"step3":{"text":"Hàng này đã có ba ô đen, nên ô chưa quyết định của nó là trắng. **Nhấp chuột phải** vào nó — nhấp chuột phải đi theo thứ tự ngược lại và tô trắng trước."},"step4":{"text":"Ô chưa quyết định cuối cùng có hai ô đen bên trái, và ô thứ ba liền nhau là không được phép. **Nhấp chuột phải** vào nó để tô trắng và hoàn thành lưới."},"step5":{"text":"Đã giải! Nhấp lại vào một ô đã tô sẽ chuyển nó sang màu còn lại rồi trở về chưa quyết định, và **Hoàn tác** lùi lại từng nước của bạn."}},"untangle":{"step1":{"text":"Sáu điểm nằm trên một vòng tròn, nối với nhau bằng tám đường. Có hai cặp đường cắt nhau — đó là những đường màu đỏ. Hãy kéo các điểm đi cho đến khi không còn đường đỏ nào."},"step2":{"text":"Trước tiên hãy bấm **Bắt lưới**, nút lưới cạnh nút Hoàn tác (hoặc nhấn **G**). Chế độ bắt lưới sẽ bật, nên điểm bạn thả sẽ rơi vào một trong các chấm mờ ở tâm mỗi ô."},"step3":{"text":"**Kéo** điểm ở đỉnh vòng tròn vào ô trống ở **góc trên bên trái**.","textTouch":"**Kéo** điểm ở đỉnh vòng tròn vào khoảng trống ở **góc trên bên trái** bàn chơi. Không cần đặt chính xác chỗ nào — chỉ cần chỗ cắt nhau biến mất."},"step4":{"text":"Còn một chỗ cắt nhau, ở bên phải. **Kéo** điểm thấp nhất vào **góc dưới bên phải** đang trống.","textTouch":"Còn một chỗ cắt nhau, ở bên phải. **Kéo** điểm thấp nhất vào **góc dưới bên phải** đang trống — đường đỏ cuối cùng biến mất ngay khi hết vướng."},"step5":{"text":"Đã gỡ xong. **Giải** gỡ rối giúp bạn bất kỳ mớ nào, còn phím mũi tên di chuyển con trỏ từ điểm này sang điểm khác, với Enter để nhấc điểm lên và thả xuống.","textTouch":"Đã gỡ xong. Đường đỏ là những đường vẫn còn cắt nhau, nên cứ kéo tiếp cho đến khi không còn đường nào — hoặc để **Giải** gỡ rối giúp bạn."}}}'),Fe={$locale:`vi`,$name:q,$dir:`ltr`,ui:J,touchPhrases:Y,messages:X,status:Z,games:Q,tutorials:$};export{g as A,ee as B,A as C,S as D,w as E,o as F,i as I,oe as L,f as M,u as N,b as O,c as P,ie as R,M as S,E as T,t as V,H as _,Ee as a,I as b,be as c,me as d,fe as f,W as g,se as h,Oe as i,m as j,v as k,ve as l,ce as m,Me as n,we as o,ue as p,Ae as r,Se as s,Pe as t,ge as u,B as v,O as w,P as x,R as y,ne as z};
//# sourceMappingURL=i18n-vi--yq0j_Su.js.map