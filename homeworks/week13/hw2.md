## What are the principles of React Router?

React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. 

#### [HashRouter]((https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/HashRouter.md))

A `<Router>` that uses the hash portion of the URL (i.e. `window.location.hash`) to keep your UI in sync with the URL.

#### [BrowserRouter](https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/api/BrowserRouter.md)

A `<Router>` that uses the HTML5 history API (`pushState`, `replaceState` and the `popstate` event) to keep your UI in sync with the URL.


## What is Redux?

Redux can be described in three fundamental principles:

1. Single source of truth

The state of your whole application is stored in an object tree within a single store.

2. State is read-only

The only way to change the state is to emit an action, an object describing what happened.

3. Changes are made with pure functions

To specify how the state tree is transformed by actions, you write pure reducers.

[more](https://redux.js.org/introduction/three-principles)

## What is Single Page Application? 有哪些頁面一定要用這個架構去設計嗎？

A single-page application (SPA) is a web application or web site that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server. It makes the application behave more like a desktop application. 

The page does not reload at any point in the process, nor does control transfer to another page, although the location hash or the HTML5 History API can be used to provide the perception and navigability of separate logical pages in the application.

The recent SPA redesigns of streaming music site [Pandora](https://www.pandora.com/) and Google’s Gmail platform are great examples of this in practice.

When it comes to music streaming websites, it is interrupting to reload the whole page and make the music stopped while user wants to see another pages. Under the circumstances we have no choice except using SPA.
