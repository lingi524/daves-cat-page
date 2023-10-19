My friend Dave is crazy about cats! I’ve been tasked to make him a website so he can keep track of his furry friends, and who am I to decline a request like that? 
🐈‍⬛🐈🐱❣️

## 🐈 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧑‍🎨 Stack and Design
- Next.js, since Next.js recently became stable I've taken my chanses to use it!
- Typescript, I'm still learning Typescript, but it can really save some headaces
- Tailwind, this is my CSS library of choice. It may be ugly but it's quick! And it also come out the box with Next
- Design, the design is some kind of Mean Girls Burn book fever dream, but it was the first thing that came to my mind when I read "cat hoarder" so I went with it

## 🤓 Some specfic reasonings

- I decided to go with a custom hook to access local storage since I wanted to use the functionality in different places.
  

## 💡 Improvements
I have some comments in the code in the places where I have unfinished business.
- Overall there's a lot of things that still have to be done. I came down with a cold and a fever this Tuesday, so I've not been feeling my best. That's not an excuse (...or maybe a small one) for what's not been done, but still.
- Add form validation. I would have added a validation function that were to run on submit and that function can then call the actual submit/updateState functions
- Image upload. I have not worked with that were there have already been a pipeline and server set up where images can be stored, so I ran into some issues there.
- Use state management, I made the decision that this project was too small to benefit from a state management library, but I do have a few shared states that would have been nice to have handled
- I initally wanted to make a new page with a cat graveyard for all the deleted cats, but that both felt a bit too morbid, and I really had to focus on the basics this time
