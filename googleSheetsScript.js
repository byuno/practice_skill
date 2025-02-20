function importXML() {
    var fileId = 'YOUR_FILE_ID'; // Replace with your actual file ID from Google Drive
    var file = DriveApp.getFileById(fileId);
    var xmlContent = file.getBlob().getDataAsString();
    var doc = XmlService.parse(xmlContent);
    var root = doc.getRootElement();
    
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    sheet.clear(); // Clear old data

    // Set headers
    var headers = ["Test Suite", "Timestamp", "Browser", "Test Case", "Class Name", "Time (s)", "Failures", "Skipped", "Errors"];
    sheet.appendRow(headers);

    var testsuites = root.getChildren("testsuite");
    var data = [];

    testsuites.forEach(function(testsuite) {
        var suiteName = testsuite.getAttribute("name").getValue();
        var timestamp = testsuite.getAttribute("timestamp").getValue();
        var browser = testsuite.getAttribute("hostname").getValue();
        var failures = testsuite.getAttribute("failures").getValue();
        var skipped = testsuite.getAttribute("skipped").getValue();
        var errors = testsuite.getAttribute("errors").getValue();
        var testcases = testsuite.getChildren("testcase");

        testcases.forEach(function(testcase) {
            var testName = testcase.getAttribute("name").getValue();
            var className = testcase.getAttribute("classname").getValue();
            var time = testcase.getAttribute("time").getValue();
            data.push([suiteName, timestamp, browser, testName, className, time, failures, skipped, errors]);
        });
    });

    // Append data to sheet
    if (data.length > 0) {
        sheet.getRange(2, 1, data.length, data[0].length).setValues(data);
    }
}
