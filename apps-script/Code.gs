/**
 * خَط | قدرات — استقبال تسجيلات الموقع وحفظها في Google Sheet
 *
 * الخطوات:
 * 1) أنشئ جدول Google Sheets جديدًا.
 * 2) من القائمة: Extensions ← Apps Script، والصق هذا الملف كاملًا.
 * 3) غيّر قيمة SECRET أدناه إلى نص عشوائي طويل (ستضعه نفسه في Vercel).
 * 4) Deploy ← New deployment ← Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5) انسخ رابط الـ Web app وضعه في متغير البيئة SHEETS_WEBHOOK_URL.
 */

var SECRET = 'b5677a76f64343b998f325fcf4b562a3';

/** لتلقّي إشعار على بريدك مع كل تسجيل جديد، ضع بريدك هنا. اتركه فارغًا لتعطيل الإشعار. */
var NOTIFY_EMAIL = '';

var HEADERS = [
  'وقت التسجيل',
  'الاسم',
  'رقم واتساب',
  'التخصص والسنة',
  'المستوى في البرمجة',
  'الأيام الأنسب',
  'سبب الاهتمام',
  'سؤال / ملاحظة',
];

function doPost(e) {
  try {
    var body = JSON.parse(e.postData.contents);

    if (SECRET && body.secret !== SECRET) {
      return json({ ok: false, error: 'unauthorized' });
    }

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    ensureHeaders(sheet);

    var when = body.submittedAt ? new Date(body.submittedAt) : new Date();

    sheet.appendRow([
      Utilities.formatDate(when, 'Asia/Gaza', 'yyyy-MM-dd HH:mm'),
      body.name || '',
      "'" + (body.whatsapp || ''), // فاصلة عليا حتى لا يحذف الجدول الصفر الأول
      body.study || '',
      body.level || '',
      body.days || '',
      body.motivation || '',
      body.question || '',
    ]);

    if (NOTIFY_EMAIL) {
      MailApp.sendEmail(
        NOTIFY_EMAIL,
        'تسجيل جديد في لقاء قدرات: ' + (body.name || ''),
        [
          'الاسم: ' + (body.name || ''),
          'واتساب: ' + (body.whatsapp || ''),
          'الدراسة: ' + (body.study || ''),
          'المستوى: ' + (body.level || ''),
          'الأيام: ' + (body.days || ''),
          'سبب الاهتمام: ' + (body.motivation || ''),
          'سؤال: ' + (body.question || ''),
        ].join('\n')
      );
    }

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json({ ok: true, service: 'khat-qudrat' });
}

function ensureHeaders(sheet) {
  if (sheet.getLastRow() > 0) return;
  sheet.appendRow(HEADERS);
  sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, HEADERS.length).setHorizontalAlignment('right');
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
