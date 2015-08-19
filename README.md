# iTunes Search App

This exercise will teach you how to use AJAX with React, so that you'll be able to send requests to external API's in your React apps.

You'll be creating an app using the iTunes Search API, in which users can search for various products on iTunes.

The search area should include both an input field and a select option. The former is get the search query, the latter for specifying the iTunes section (film, music, apps, podcasts etc). Based on this, you'll show the user the most relevant products from iTunes.

## Getting started

To get started, clone this repo. We've linked to the jQuery CDN for you in the HTML file, plus the React.js source and the JSX-transformer.  

Your React components will go within the **script** tag in the *index.html* file. This way, you won't need to setup a local server to run the app; simply drag the *index.html* file into the browser instead. 

**Note:** This is not a good practice, and not what you'd do in production - BUT - we want to get up and running quickly. So if you've never configured a local server before, don't worry about it.

## Remember:

### Use the React docs 
The React docs are [great](https://facebook.github.io/react/docs/getting-started.html). Use them!

### Build one line at a time

Don't try and built the entire app before you test it in the browser. Take small incremental steps and test how it works.

## Breaking the UI into components

Before you start coding, you should break the UI into components. Check out this tutorial on how to break you UI into components.

![text](https://github.com/ReactForBeginners/exercise2-itunesapi/blob/gh-pages/ui.png?raw=true)

```
├── App
│	├── SearchBar
│   ├── ListContainer
│   ├-─ ├── SingleItem
```


## Fetch the users inputs

You can either use controlled components or *refs* & *findDOMNode* to fetch the user's inputs. An example of *refs* & *findDOMNode* can be found [here](https://github.com/ReactForBeginners/course-overview/tree/master/lecture1#controlled-components). 

An example of using controlled components can be found [here.](https://github.com/ReactForBeginners/course-overview/tree/master/lecture1#refs-and-finddomnode)

## Composing the Ajax request

In the component you'll want to send the Ajax request from, add a following method:

	sendAjax: function(query, option){
		$.ajax({
			// compose the Ajax call
		});
	}


You do not need any API key to use the iTunes Search API. Simply send your Ajax request to the following URL:

	https://itunes.apple.com/search?term=QUERY&country=us&entity=CATEGORY

Replace QUERY with the search query from the user, and CATEGORY with the correct category the user wants to search through, e.g. movie,music,film,podcast.

## Stretch goals:

If you finish up early, do the following streatch goals:

* Save feature  
The ability save items in the search results to another list.

* 