# Bazcal Web

[Hosted version](bazcal.jbsalenger.com)

The creatively named "Bazcal Web" is a web interface for the bazcal discord bot. It's purpose is to help people find money making opportunities in Hypixel's Skyblock mini game by highlighting products selling for under their usual value. Along with just a simple data viewer for current products being sold on both the bazaar and auction house. 


# Files

Many files are missing, and if you'd like to host this project yourself you'll need to repair them, we'll go over why things are missing and how to repair them.


## Why are files missing?
I go to great lengths to keep this project open source, not that its a hard thing to do. I'm just bad at git. I'm sure there's a better way to keep secrets secret, but I don't know what that would be quite honestly. Currently the missing files are ".env.local" and "serviceaccount.json" 

## Cool, How can I use this?

Well, one I hope you can learn something from it. ( Or maybe not I don't really follow "best practices" and stuff like that I try to but I'd rather things work, and as a singular developer I'm more crunched for time than I would be with a team ) 

You probably meant how can I deploy this for use myself. As for that you'll need to do a few things
> **Note:** Make sure to run **`npm  i`** to install dependencies

 1. Create .env.local
	 - You'll want to create a file called ".env.local" in the root director with the contents
	`API_KEY=YOUR-API-KEY-HERE-`
	Notice that there's no quotes around the string, lets keep it that way.
	Read more about .env.local here [Next.js: Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
2. Create serviceaccount.json
	- Now I'll be honest, remember when I said I don't follow best practices and I just kinda get things to work? Well here's an example I kind of stick this file anywhere its convenient, but I'll *try* to keep it in the src/ directory. Deal? Well you didn't really have a choice. This data holds your private key from firebase for cloud firestore ( which I use as a cache for json responses from hypixel's api ) 
3. Done!
	- Well you're done, run `npm run dev` to get started!


# That's it
Thanks for reading!