# TODO List — TypeScript + Vite

A simple and functional TODO List application built using TypeScript, Vite, and LocalStorage.
The project demonstrates TypeScript classes, interfaces, DOM manipulation, and clean project architecture.

## Features

- Add new TODO items

- Delete individual items

- Mark items as completed (checkbox)

- Clear all items

- Persistent storage using localStorage

- Organized TypeScript class structure (ListItem, FullList, ListTemplate)

## Project Structure
src/
├── main.ts                 # App initialization
├── model/
│   ├── ListItem.ts         # Item class
│   └── FullList.ts         # Singleton list manager
├── templates/
│   └── ListTemplate.ts     # DOM rendering logic
├── css/
│   └── style.css           # Styling
index.html                  # UI structure

## Installation

### Clone the repository:

git clone <repository-url>
cd <project-folder>


### Install dependencies:

npm install


### Start the development server:

npm run dev


### Open the app in your browser.
Vite will display a local URL such as:

http://localhost:5173

## Usage

- Type a task into the input field and submit to add it.

- Click the checkbox to mark an item as completed.

- Click the X button to delete a specific item.

- Click Clear to remove all items.

- All items are automatically saved to localStorage.

## Technologies Used

TypeScript

Vite

HTML5

CSS3

LocalStorage API