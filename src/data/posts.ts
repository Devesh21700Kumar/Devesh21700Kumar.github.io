import type { Post } from "@/types";

export const posts: Post[] = [
  {
    id: 1,
    title: "The Power of Self-Reflection in Engineering",
    date: "2024-11-11",
    category: "Personal Growth",
    excerpt:
      "How self-reflection has transformed my problem-solving approach and engineering mindset...",
    content: `Self-reflection might be one of the most overlooked skills in engineering. Over the years, I've realized it's one of the most impactful. Today, I want to share how this habit has shaped my approach to problem-solving and team dynamics.

    Often, our first solution isn't our best one. Taking a moment to reflect after each major decision or debug session has helped me recognize patterns and refine my approach. Recently, for example, I spent half a day on an optimization task, only to realize later that I had approached the problem too narrowly.

      Key Learnings:  
    - Start each morning with 10 minutes of goal-setting
    - Document thought processes while tackling issues
    - Review commits and reflect on progress at the end of the day
    - Regularly challenge your assumptions

    This practice has strengthened my technical abilities and improved my team interactions. I now articulate ideas more clearly and am better at interpreting others' perspectives. Remember, speed in coding isn't everything—clarity and insight are often far more valuable.`,
    mood: "accomplished",
  },
  {
    id: 2,
    title: "Debounce vs Throttle: Real-world Applications",
    date: "2024-11-10",
    category: "JavaScript",
    excerpt:
      "Exploring the nuances of debounce and throttle in performance optimization...",
    content: `Optimizing performance through debounce and throttle isn't new for me, but each time I revisit these concepts, there's a renewed appreciation. Recently, I implemented both in a project’s search component, and the differences were enlightening.

      Debounce:   Ideal for delaying actions until necessary
    - Used it in a search input field to reduce API calls
    - Dropped call count from 100+ to just 15 per session, lowering server load by 85%

      Throttling:   Best for consistent event handling
    - Applied it to a scroll handler for infinite scrolling, smoothing out the user experience without spiking CPU usage

      Quick Tips:  
    - Use debounce for cases where only the final action matters (e.g., search inputs)
    - Use throttle for regular updates during user interaction (e.g., scroll or resize events)

    The optimization resulted in smoother UX and less resource strain. Reflecting on the nuances between these techniques always brings new insight into crafting a responsive user interface.`,
    mood: "excited",
  },
  {
    id: 3,
    title: "Understanding Closures Through Real Examples",
    date: "2024-11-09",
    category: "JavaScript",
    excerpt:
      "Getting to the heart of closures with practical examples that just make sense...",
    content: `Closures clicked for me years ago, but their flexibility still amazes me. This understanding has profoundly shaped how I approach structuring code. 

      Closures as Private Data:   
    Closures allow us to encapsulate functionality, serving as an alternative to classes.
    - Perfect for creating private variables, as in user session data or component state

      Closures in Factory Functions:   
    Simplifies code when creating functions with pre-set variables or parameters.

      Event Handlers:   
    Closure variables persist across events, which can be incredibly useful for user preferences, counters, or form state management.

    What made closures click for me was seeing them as functions with a “backpack” of context they carry along, ready to be used at a moment’s notice. This perspective has been foundational in writing clean, reusable code.`,
    mood: "accomplished",
  },
  {
    id: 4,
    title: "Mountain Trek: A Software Engineer's Perspective",
    date: "2024-11-08",
    category: "Life Experience",
    excerpt:
      "A trek with a 1000-meter elevation taught me life lessons that parallel engineering...",
    content: `I recently went on a modest trek, with an elevation of about 1000 meters. While it was no extreme altitude, it was packed with insights that oddly mirror software engineering.

      Preparation is Key:   
    Just as planning a major release requires thorough preparation, so does a trek.
    - Research the terrain, test tools, and ensure team alignment

      Small Steps Lead to Big Goals:   
    Much like tackling a complex project, a steady pace toward smaller milestones helped reach the peak without feeling overwhelmed.

      Resource Management:   
    Trekking taught me the importance of managing resources like energy and time—similar to optimizing code for CPU and memory usage.

    It’s incredible how experiences outside of coding can bring new perspectives to our work. This trek reminded me that growth isn’t just in the destination but in the journey.`,
    mood: "excited",
  },
  {
    id: 5,
    title: "Narcissism in Tech: A Developer's Introspection",
    date: "2024-11-07",
    category: "Industry Insights",
    excerpt:
      "Reflecting on the line between confidence and narcissism in the tech industry...",
    content: `Today, I observed an interesting situation in a code review, prompting me to think about the thin line between confidence and narcissism in tech.

    The Confidence Spectrum:   
    1). Healthy Confidence  
       - Open to feedback and admits mistakes
       - Encourages collaboration and knowledge-sharing

    2). Narcissistic Tendencies  
       - Reluctant to document, creating knowledge silos
       - Prefers complex solutions over accessible code

      Impact on Team Dynamics:   
    Narcissism can lead to knowledge hoarding and reduced collaboration, impacting the entire team's morale and increasing technical debt.

      Steps to Foster a Healthy Environment:  
    - Regular code reviews with open feedback
    - Documentation as a standard requirement
    - Encouraging humility through team retrospectives

    I’ve learned that great code doesn’t need an ego—it simply works and can be understood by the whole team.`,
    mood: "contemplative",
  },
];
