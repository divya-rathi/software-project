import unittest2
import os
from selenium import webdriver
import time
from selenium.webdriver.common.keys import Keys
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.firefox.firefox_binary import FirefoxBinary

class test(unittest2.TestCase):
    def setUp(self):
        # create a new Firefox session
        options = Options()
        options.add_argument('-headless')
        driver_path = '/bin/geckodriver'
        binary_path = '/bin/firefox/firefox'
        binary = FirefoxBinary(binary_path)
        self.driver = webdriver.Firefox(executable_path=driver_path,options=options)
        self.driver.implicitly_wait(30)
        self.driver.maximize_window()
        self.driver.get("https://pro-deploy-123.netlify.com/login")

        self.driver1 = webdriver.Firefox(executable_path=driver_path,options=options)
        self.driver1.implicitly_wait(30)
        self.driver1.maximize_window()
        self.driver1.get(home)
        time.sleep(5)
        self.driver1.refresh()
        time.sleep(5)

    def test_scroll(self):
        print("Scroll Test")
        self.driver1.find_element_by_class_name("hooper-next").click()
        time.sleep(10)

    def test_checkloc(self):
        print("Properly Aligned")
        self.loc1 = self.driver.find_element_by_id('email').location
        self.loc2 = self.driver.find_element_by_id('pass').location
        self.assertEqual(self.loc1['x'],self.loc2['x'])

    def test_checklogin_box(self):
        print("validation")
        self.user_name = "cb.en.u4cse20000@cb.students.amrita.edu"
        self.password = "chocolate"
        self.element = self.driver.find_element_by_id("email")
        self.element.send_keys(self.user_name)
        self.element = self.driver.find_element_by_id("pass")
        self.element.send_keys(self.password)
        self.driver.find_element_by_id('login').click()
        time.sleep(10)
        self.driver.find_element_by_link_text('Account').click()
        time.sleep(10)
        url = self.driver.current_url
        self.assertEqual(url, "https://pro-deploy-123.netlify.com/account")
        #self.element.send_keys(Keys.RETURN)

    def test_account(self):
        print("Access account page")
        if self.driver1.find_element_by_link_text('Log In').is_displayed():
            self.driver1.get("https://pro-deploy-123.netlify.com/account/")
            time.sleep(5)
            url = self.driver1.current_url
            self.assertTrue(url, home)

    def test_search(self):
        print("Search Test")
        code = "15CHY100"
        self.driver1.find_element_by_id("searchbar").send_keys(code)
        self.driver1.find_element_by_id("searchbutton").click()
        time.sleep(5)
        #course_name = self.driver1.find_element_by_xpath("/html/body/div/div/div/div/h1").text
        course_code = (self.driver1.find_element_by_xpath("//h1[@id='courseCode']").text).split()
        self.assertEqual(code,course_code[0])

    def test_buttonColor(self):
        print("Log In button color")
        color = self.driver1.find_element_by_id("loginnav").value_of_css_property('background-color')
        self.assertEqual(color, 'rgb(87, 0, 102)')

    def test_checkwronglogin_box(self):
        print("wrong validation")
        self.user_name = "cb.en.u4cse20000@cb.students.amrita.edu"
        self.password = ""
        self.element = self.driver.find_element_by_id("email")
        self.element.send_keys(self.user_name)
        self.element = self.driver.find_element_by_id("pass")
        self.element.send_keys(self.password)
        self.element.send_keys(Keys.RETURN)
        self.Alert = self.driver.switch_to.alert
        self.alertmsg = self.Alert.text;
        print(self.alertmsg)
        self.Alert.accept();

    def test_search_box(self):
        print("search bar")
        self.assertTrue(self.driver.find_element_by_id('searchbar').is_displayed())

    def test_searchbutton_box(self):
        print("searchbutton")
        self.assertTrue(self.driver.find_element_by_id('searchbutton').is_displayed())
        #self.assertTrue(self.is_element_present(By.ID, "searchbutton"))

    def test_loginbutton_box(self):
        print("login button")
        self.assertTrue(self.driver.find_element_by_id('login').is_displayed())

    def tearDown(self):
    # close the browser window
        self.driver.quit()
        self.driver1.quit()

home = "https://pro-deploy-123.netlify.com/"
if(__name__=="__main__"):
    unittest2.main()


'''
    def test_centerCheck(self):
        self.body_loc = self.driver.find_element_by_tag_name('canvas').location
        self.body_end = self.driver.find_element_by_tag_name('canvas').size
        body_center = (self.body_end['height']/2, self.body_end['width']/2)
        self.card_loc = self.driver.find_element_by_class_name('card').location
        self.card_end = self.driver.find_element_by_class_name('card').size
        print(body_center)
        print(self.card_loc)
        print(self.card_end)
        print((self.card_end['height']+self.card_loc['y']))
        print((self.card_end['width']+self.card_loc['x']))
        self.body_end = self.driver.find_element_by_class_name('card').value_of_css_property('transform')
        print(np.array(self.body_end))
    '''
