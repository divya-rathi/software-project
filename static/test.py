from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import unittest
class SearchText(unittest.TestCase):
    def setUp(self):
            # create a new Firefox session
            self.driver = webdriver.Firefox()
            self.driver.implicitly_wait(30)
            self.driver.maximize_window()
            # navigate to the application home page
            self.driver.get("https://pro-deploy-123.netlify.com/login")
    def test_checklogin_box(self):
        print("validation")
        self.user_name = "cb.en.u4cse20000@cb.students.amrita.edu"
        self.password = "chocolate"
        self.element = self.driver.find_element_by_id("email")
        self.element.send_keys(self.user_name)
        self.element = self.driver.find_element_by_id("pass")
        self.element.send_keys(self.password)
        self.element.send_keys(Keys.RETURN)
    def test_checkwronglogin_box(self):
        print("wrong validation")
        self.user_name = "cb.en.u4cse20000@cb.students.amrita.edu"
        self.password = ""
        self.element = self.driver.find_element_by_id("email")
        self.element.send_keys(self.user_name)
        self.element = self.driver.find_element_by_id("pass")
        self.element.send_keys(self.password)
        self.element.send_keys(Keys.RETURN)
        self.Alert=self.driver.switch_to_alert()
        self.alertmsg=self.Alert.text;
        print(self.alertmsg)
        self.Alert.accept();

    def test_search_box(self):

    # # check search box exists on Home page
            self.assertTrue(self.is_element_present(By.ID,"searchbar"))
            print("search bar")
    def test_searchbutton_box(self):

    # # check search box exists on Home page
            self.assertTrue(self.is_element_present(By.ID,"searchbutton"))
            print("searchbutton")
    def test_loginbutton_box(self):

    # # check search box exists on Home page
            self.assertTrue(self.is_element_present(By.ID,"login"))
            print("login button")
if __name__=='main':
    main()
