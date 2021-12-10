from selenium import webdriver

driver = webdriver.Firefox()
driver.get('http://saucedemo.com')

CAMPO_USUARIO = driver.find_element_by_css_selector('#user-name').send_keys('standard_user')

CAMPO_SENHA = driver.find_element_by_css_selector('#password').send_keys('secret_sauce')

BOTAO_LOGIN = driver.find_element_by_css_selector('#login-button').click()


