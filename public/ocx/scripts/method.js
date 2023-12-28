/**
 * 통화 중 여부.
 */
var flagIsCalling = false

/**
 * 디바이스 연결 여부.
 */
var strCreateFlag = 'N'

/**
 * 화면 잠금 여부. (1: 입력 가능, 0: 입력 불가능)
 */
var nFlagInput = 1

/**
 * Information TextArea 초기화.
 */
function InfoClear() {
  document.getElementById('txtInfo').value = ''
}

/**
 * OCX 연결 여부 확인.
 */
function fn_DeviceConnCompare() {
  console.log('fn_DeviceConnCompare function loaded')

  if (strCreateFlag == 'Y') {
    // 연결 --> 연결 해제
    fn_DeviceClose()
  } else if (strCreateFlag == 'N') {
    // 연결 해제 --> 연결
    fn_DeviceCreate()
  }
}

/**
 * OCX 연결.
 *
 * 0: 소켓 생성 오류.
 * 1: 연결 성공.
 * 3, 4, 5: USB 연결 안 됨.
 */
function fn_DeviceCreate() {
  var result = 0
  if (strCreateFlag == 'N') {
    result = IRUSB.CreateDevice()
    if (result == '0') {
      document.getElementById('txtInfo').value =
        document.getElementById('txtInfo').value +
        '[[METHOD] USB-CreateDevice] : 소켓 생성 오류(PC측 오류/앱 구동 안 됨) || result=' +
        result +
        '\n'
    } else if (result == '1') {
      document.getElementById('txtInfo').value =
        document.getElementById('txtInfo').value +
        '[[METHOD] USB-CreateDevice] : 연결 성공 || result=' +
        result +
        '\n'
    } else if (result == '3' || result == '4' || result == '5') {
      document.getElementById('txtInfo').value =
        document.getElementById('txtInfo').value +
        '[[METHOD] USB-CreateDevice] : USB 연결 안됨 || result=' +
        result +
        '\n'
    }
    document.getElementById('txtInfo').scrollTop =
      document.getElementById('txtInfo').scrollHeight
  }
}

/**
 * OCX 연결 해제.
 */
function fn_DeviceClose() {
  if (strCreateFlag == 'Y') {
    IRUSB.CloseDevice()
    document.getElementById('txtInfo').value =
      document.getElementById('txtInfo').value +
      '[[METHOD] USB-CloseDevice] : USB 연결 해제 \n'
    document.getElementById('txtInfo').scrollTop =
      document.getElementById('txtInfo').scrollHeight
  }
}
