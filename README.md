# iTunes Search App

This exercise will teach you how to use AJAX with React, so that you'll be able to send requests to external API's from your React apps. 

You'll create an app which use the iTunes Search API, so that users can search for products on iTunes.

The search area should include both an input field and a select option. The former is get the search query, the latter is for specifying the iTunes section (film, music, apps, podcasts etc). Based on this, you'll show the user the most relevant products from iTunes.

Here is a [live version](http://reactforbeginners.github.io/exercise2-itunesapi/) of the app you'll be coding.

## Getting started

To get started, clone this repo. We've linked to jQuery, React and the JSX-transformer in the *index.html* file, so you don't have to do this yourself.  

Your React components will go within the **script** tag in the *index.html* file. This way, you won't need to setup a local server to run the app; simply drag the *index.html* file into the browser instead. 

**Note:** This is not a good practice, and not what you'd do in production - BUT - we want to get up and running quickly, and avoid all confusion, as we noticed that some students were having problems with this yesterday. So if you've never configured a local server before, don't worry about it.

## Remember:

### Use the React docs 
The React docs are [great](https://facebook.github.io/react/docs/getting-started.html). It's a good idea to have these in an open tab when you're developing, so you can quickly look up stuff you're uncertain about. They provide good examples and explanations.

### Take small steps, and test it often!

Don't try and built the entire app before you test it in the browser. Take incremental steps and test how it works in the browser. Remember to use the console to check if you're getting any errors. The error messages will often point you in the right direction.

## Breaking the UI into components

Before you start coding, you should get an overview over your UI, by breaking it into components. Check out [this tutorial](http://facebook.github.io/react/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy) on how to break you UI into components.

![text](https://github.com/ReactForBeginners/exercise2-itunesapi/blob/gh-pages/ui.png?raw=true)

## Fetch the users inputs

You can either use *controlled components* or *refs* & *findDOMNode* to fetch the user's inputs.  

An example of *refs* & *findDOMNode* can be found [here](https://github.com/ReactForBeginners/course-overview/tree/master/lecture1#controlled-components). 

An example of using *controlled components* can be found [here.](https://github.com/ReactForBeginners/course-overview/tree/master/lecture1#refs-and-finddomnode)

## Composing the Ajax request

In the component you'll want to send the Ajax request from, add a following method:

	sendAjax: function(URL){
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