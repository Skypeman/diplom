<h1 align="center">Проект по автоматизации тестирования приложения <a href="http://users.bugred.ru/">users.bugred.ru</a> с использованием Playwright </h1> 


##  Содержание
- <a href="#cases"> Тест-кейсы</a>
- <a href="#autotests"> Запуск автотестов</a>
- <a href="#generateAllureReport"> Генерация отчетов</a>
- <a href="#jenkins"> Сборка в Jenkins</a>
- <a href="#allureReport"> Пример Allure-отчета</a>
- <a href="#allureTestOpsReport"> Пример Allure TestOps-отчета</a>
- <a href="#tg"> Уведомления в Telegram с использованием бота</a>

##  Инструменты
<p>
  <img src="https://github.com/devicons/devicon/blob/master/icons/playwright/playwright-original.svg" title="Playwright" **alt="Playwright" width="40" height="40"/>
  <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2hhc3JqaDgyN3JibTdnaG5najE5bGthcWw3YWpiZmtjNDNyNW9leCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SvFocn0wNMx0iv2rYz/giphy.gif" width="40"/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/git/git-original.svg" title="Git" **alt="Git" width="40" height="40"/>
  <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWVleDFxZzBoZThhd2dxZXI3MXFycm82MTBiczJnYmdqaDJ0eXRhbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ZcdZ7ldgeIhfesqA6E/giphy.gif" width="40" height="40"/>
  <img src="https://softfinder.ru/upload/styles/logo/public/logo/logo-2605.png?itok=vqVq1c7j" width="40" height="40"/>
  <img src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDdrcXF4am14YWVxeGp4MnJmMThjOThpcjQ5Zm50bXc3dHRyaXY5ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/du3J3cXyzhj75IOgvA/giphy.gif" title="GitHub" **alt="GitHub" width="40" height="40"/>
  <img src="https://github.com/allure-framework/allure2/blob/main/.idea/icon.png" title="Allure Report" **alt="Allure Report" width="40" height="40"/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/jenkins/jenkins-original.svg" title="Jenkins" **alt="Jenkins" width="40" height="40"/>
  <img src="https://fakerjs.dev/logo.svg" width="40" height="40"/>
  
  


Тесты разработаны на языке <code>JavaScript</code> с использованием фреймворка для автоматизации тестирования <code>[Playwright](https://playwright.dev)</code>. При проектировании тестов был применён паттерн PageObject.

Для организации удаленного запуска предусмотрены интеграции с <code>Jenkins</code> и <code>GitHub Actions</code>. Это позволяет автоматически генерировать Allure-отчеты и отправлять результаты тестирования в <code>Allure TestOps</code>. Кроме того, с помощью бота результаты отправляются в <code>Telegram</code>.

____
<a id="cases"></a>
## 📗Тест-кейсы
- **UI тесты:**
  - Успешная авторизация на сайте
  - Успешная регистрация на сайте
  - Успешный поиск пользователей на сайте
  - Успешный логаут на сайте
  - Незарегистрированный пользователь не может авторизоваться на сайте
- **API тесты:**
  - Пользователь может зарегистрироваться в системе указав Имя, Email и пароль
  - Пользователь не может зарегистрироваться в системе не указав Имя
  - Пользователь не может зарегистрироваться в системе не указав Email
  - Пользователь не может зарегистрироваться в системе не указав пароль
  - Пользователь может создать новую компанию

<a id="autotests"></a>
____
## 🚀 Запуск автотестов и генерация отчетов

### Запуск тестов из терминала

Для запуска тестов:
```
npm t
```
Для отладки тестов:
```
npm run debug
```

<a id="generateAllureReport"></a>
_____
### Генерация отчетов Allure из терминала

Команда для генерации отчетов:
```
npm run allureGenerate
```
Для открытия отчета в браузере:
```
npm run allureOpen
```

---
<a id="jenkins"></a>
## </a> Сборка в <a target="_blank" href="https://jenkins.autotests.cloud/job/myDiplom/"> Jenkins </a>
Для доступа в <code>Jenkins</code> потребуется пройти регистрацию на платформе [Jenkins](https://jenkins.autotests.cloud/). Для запуска сборки необходимо нажать кнопку <code>Build now</code>.
![Jenkins](https://github.com/user-attachments/assets/61e48248-d0f4-4fae-8fa6-eab5403d3325)

После завершения сборки в разделе <code>Build History</code> напротив номера сборки появятся ссылки на Allure report и Allure testOps.
____
<a id="allureReport"></a>
## </a> Пример <a target="_blank" href="https://jenkins.autotests.cloud/job/myDiplom/3/allure/"> Allure-отчета </a>
![Allure report](https://github.com/user-attachments/assets/0d4de912-6381-4975-97c4-5a2dec7c4fae)


____
<a id="allureTestOpsReport"></a>
## </a> Пример <a target="_blank" href="https://allure.autotests.cloud/launch/43368"> результата запуска в Allure TestOps </a>
![Allure TestOps](https://github.com/user-attachments/assets/12417a5d-1556-4b46-a6f1-6081b9d7ae1c)

____
<a id="tg"></a>
## Уведомление в Telegram
После завершения сборки <code>Telegram</code>-бот автоматически присылает сообщение в чат.
![Tg bot](https://github.com/user-attachments/assets/389f57a4-b84c-4997-9146-2ae55db4f9f8)
