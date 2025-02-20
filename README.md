# practice_skill

# Framework Selection

Playwright was chosen because it is the defacto automation tool at AD. It's well documented therefore you can find the answer to cover a variety of test scanrios. It can also handle a variety of types of tests from E2E and API test. 

I find it less flaky compared to Cypress. I find myself not battling elements not beign detected because of invisible layers. 

Mobile testing, it seems, is still not given the same level of credibilty as appium, however, it's getting easier to convince its adoption.

# Test Case Design

**Preconditons:**

Each test case will begin at the homepage, https://automationexercise.com/

As the test case begins a random number generator, getRandNumber(), is used to create a random number to used within the test as the number products selected. It is also used to assert the number of items in the cart.

**Test Steps:**

The test case goes through the following test steps:

0. As previously mentioned, the test navigates to https://automationexercise.com/
1. A random number is generated via getRandNumber()
2. Product link is clicked
3. Third item is selected
4. A random quantity is entered
5. The item is added to the cart
6. Navigate to cart and verify quatity
7. Concludes test by checking the Register/Login modal*

* Added to signify the end of test (pre step 7)

**Expected Results:**

The test will pass if the number that was entered on the product page is the same as the number on the cart page. 

The same results can be expected on Chrome, Firefox, Safari, Android (Mobile Chrome), and iPhone 14 (Mobile Safari).

# Execution

Run:

npx playwright test

# Analysis and Test Report

With certain clients in mind, data was extracted from the xml and displayed in a spreadsheet. Refer to results.xlsx.

# Google Sheets script
Here are step-by-step instructions for using the Google Sheets script to import XML test results.

---

# **How to Import XML Test Results into Google Sheets**
This guide explains how to use **Google Apps Script** to import and neatly display XML test results from a file stored in **Google Drive**.

---

## **Step 1: Upload Your XML File to Google Drive**
1. **Go to Google Drive** (https://drive.google.com).  
2. Click the **+ New** button → **File upload**.  
3. Select your XML file (e.g., `results.xml`).  
4. Once uploaded, **right-click the file** → **Get link** → Copy the file ID.  
   - The file ID is the long string of characters in the URL after `https://drive.google.com/file/d/` and before `/view`.

---

## **Step 2: Open Google Sheets**
1. Open **Google Sheets** (https://sheets.google.com).  
2. Create a **new spreadsheet** or use an existing one.  

---

## **Step 3: Open Google Apps Script**
1. In Google Sheets, click **Extensions** → **Apps Script**.  
2. Delete any existing code and **paste the script**.

---

## **Step 4: Update the Script**
1. Replace **`YOUR_FILE_ID`** in the script with the **actual file ID** of your XML file from Google Drive.
2. Click the **Save (💾) icon**.

---

## **Step 5: Run the Script**
1. Click the **Run** button ▶ at the top.  
2. Google will ask for **permissions**—approve them.  
3. Once the script runs, return to **Google Sheets**.  

---

## **Step 6: View Your Imported Data**
- The XML data should now appear in **Sheet 1**, starting from cell `A1`.
- The table will include columns:
  - **Test Suite**
  - **Timestamp**
  - **Browser**
  - **Test Case**
  - **Class Name**
  - **Time (s)**
  - **Failures**
  - **Skipped**
  - **Errors**

### **Example Output:**
| Test Suite       | Timestamp                  | Browser       | Test Case                                         | Class Name        | Time (s) | Failures | Skipped | Errors |
|-----------------|--------------------------|--------------|--------------------------------------------------|------------------|----------|----------|---------|--------|
| checkout.spec.ts | 2025-02-19T08:03:25.447Z | chromium     | navigation › Check that correct amount of items were added to cart | checkout.spec.ts | 3.871 | 0 | 0 | 0 |
| checkout.spec.ts | 2025-02-19T08:03:25.447Z | firefox      | navigation › Check that correct amount of items were added to cart | checkout.spec.ts | 4.126 | 0 | 0 | 0 |
| checkout.spec.ts | 2025-02-19T08:03:25.447Z | webkit       | navigation › Check that correct amount of items were added to cart | checkout.spec.ts | 3.806 | 0 | 0 | 0 |
| checkout.spec.ts | 2025-02-19T08:03:25.447Z | Mobile Chrome | navigation › Check that correct amount of items were added to cart | checkout.spec.ts | 3.01 | 0 | 0 | 0 |
| checkout.spec.ts | 2025-02-19T08:03:25.447Z | Mobile Safari | navigation › Check that correct amount of items were added to cart | checkout.spec.ts | 3.544 | 0 | 0 | 0 |

---

## **Troubleshooting**
### **If Data Doesn't Appear in Sheets:**
✔ **Ensure the file ID is correct** (Step 4).  
✔ **Check if the script ran successfully** (Apps Script → View Logs).  
✔ **Make sure your XML file is properly formatted**.  

---
