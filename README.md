# Shared shopping list

## Description of the project

This project is a web application for managing shared shopping lists. It allows users to create and deactivate shopping lists, add items to the lists, mark items as collected, and view statistics about the lists and items.

## Local installation

Download the zipped project, and extract it to a new folder.
- Open a terminal and navigate to the project folder.
- Run `docker-compose up --build` to start the application.
- Access the application in your web browser ar `http://localhost:7777`.
- To shutdown the application, press CTRL + C in terminal.

## Online deployment

link to the online deployment here!

## Usage

By default, the application starts on the port 7777 and when run locally, can be accessed at http://localhost:7777. The main page shows statistics for the application. Page contains the number of created shopping lists and the number of created items. The numbers include both the active and deactive shopping lists and the collected and uncollected items. The main page has a link with the text "Lists" that links the user to the path /lists.

Path /lists shows a form that can be used to add shopping lists, and a list of existing shopping lists. Only shopping lists that are active are shown. After creating a new shopping list, the name of the created shopping list acts as a link to that specific list. Underneath the shopping list name is a `Deactivate list!` -button, which deactivates the list upon clicking it. IMPORTANT, after deactivating the list, it can no longer be viewed or modified in the web browser. The page for adding shopping lists also has a link back to the main page.

After creating a shopping list, clicking it's name redirects to path /lists/id where id corresponds to the id of the shopping list in the database. In the path /lists/id, user can add item to the list using the provided form. An item can be marked collected by clicking `Mark collected!` -button underneath the item. The items in the shopping list are shown in alphabetic order so that the list first contains all uncollected items in alphabetic order, followed by all collected items in alphabetic order. Collected items are striked through, i.e:
- Milk
- Oranges
- Wheat
- ~~Apples~~
- ~~Coffee~~

The page for adding items to the shopping list has a link `Shopping lists` back to the page for adding shopping lists.

## Screenshots

Main page and statistics
![Main page](.images/mainpage.PNG) 
---
Shopping list form and list of shopping lists
![Shopping list form](https://github.com/BenkkuH/wsd-ostoslista-jaettu/blob/main/images/listanlisays.png?raw=true)
---
Form for adding items to a shopping list, and list of items.
![Item form](.images/ostoslista1.PNG)
