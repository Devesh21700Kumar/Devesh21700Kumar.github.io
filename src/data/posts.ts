// src/data/posts.ts
import type { Post } from "@/types";

export const posts: Post[] = [
  {
    id: 1,
    title: "The Power of Self-Reflection in Engineering",
    date: "2024-11-11",
    category: "Personal Growth",
    excerpt:
      "Discovering how self-reflection has improved my debugging skills and problem-solving approach...",
    content: `Understanding oneself is perhaps the most crucial debugging skill I've developed. Today, I want to share how self-reflection has transformed my approach to engineering.

When faced with complex problems, I've noticed that my first solutions aren't always the best ones. Taking a step back to reflect has helped me see patterns I was missing. For instance, last week I spent hours trying to optimize a component, only to realize through reflection that I was solving the wrong problem entirely.

Key Learnings:
1. Take 10 minutes each morning to plan your approach
2. Document your thought process while solving problems
3. Review your code commits at the end of each day
4. Question your assumptions regularly

This practice has not only made me a better engineer but also a better team member. I've learned to communicate my ideas more clearly and understand others' perspectives more deeply.

Remember: The best engineers aren't those who code the fastest, but those who think the most clearly.`,
    mood: "accomplished",
  },
  {
    id: 2,
    title: "Debounce vs Throttle: Real-world Applications",
    date: "2024-11-10",
    category: "JavaScript",
    excerpt:
      "A practical exploration of performance optimization techniques in JavaScript...",
    content: `Today I implemented both debouncing and throttling in our search component, and the results were eye-opening.

Debouncing: Perfect for search inputs
- Only triggers after user stops typing for 300ms
- Reduced API calls from 100+ to just 15 per session
- Implementation reduced server load by 85%

Example Use Cases:
1. Search input fields
2. Window resize handlers
3. Save draft functionality
4. Form validation

Throttling: Ideal for continuous events
- Limits scroll event to once every 100ms
- Perfect for infinite scrolling
- Smooth animation frames
- Consistent CPU usage

The key difference I discovered is that debounce is perfect when you want the final state (like a completed search term), while throttle is better when you need regular updates (like animation frames).

Performance Impact:
- Search latency reduced by 200ms
- CPU usage dropped by 40%
- Better mobile battery life
- Smoother UX overall

This optimization has dramatically improved our application's performance and user experience.`,
    mood: "excited",
  },
  {
    id: 3,
    title: "Understanding Closures Through Real Examples",
    date: "2024-11-09",
    category: "JavaScript",
    excerpt: "Breaking down closures with practical, real-world examples...",
    content: `Closures clicked for me today in a way they never had before. Let me share my revelation through practical examples.

A closure is simply a function that remembers its outer variables and can access them. Here's why they're incredibly powerful:

1. Private Data
Instead of using classes, we can create private variables using closures:
- User data encapsulation
- Counter implementations
- Module patterns

2. Factory Functions
Creating specialized functions with preset values:
- Custom loggers
- Partial application
- Configurable middleware

3. Event Handlers
Maintaining state between events:
- Click counters
- User preferences
- Form state management

What finally made it click was realizing that closures are just functions with backpacks of data they carry around. They remember where they came from and what variables they had access to when they were created.

This understanding has completely changed how I structure my applications.`,
    mood: "accomplished",
  },
  {
    id: 4,
    title: "High Altitude Trek: A Software Engineer's Perspective",
    date: "2024-11-08",
    category: "Life Experience",
    excerpt: "What climbing a mountain taught me about coding and life...",
    content: `This weekend's trek to 14,000 feet revealed surprising parallels between mountaineering and software engineering.

1. Preparation Matters
Just like planning a complex feature:
- Research is crucial
- Tools must be tested
- Backup plans are essential
- Team coordination is vital

2. Small Steps, Big Goals
Breaking down the climb like a large project:
- Focus on immediate next step
- Regular checkpoints
- Constant progress evaluation
- Flexible planning

3. Resource Management
Similar to handling memory and CPU:
- Energy conservation
- Time management
- Equipment optimization
- Team strength utilization

4. Problem-Solving at Altitude
Like debugging in production:
- Quick decisions required
- Limited resources
- High-stakes environment
- Clear communication needed

The mountain taught me more about systematic problem-solving than any programming course ever could. Sometimes you need to step away from the screen to become a better programmer.`,
    mood: "excited",
  },
  {
    id: 5,
    title: "Narcissism in Tech: A Developer's Introspection",
    date: "2024-11-07",
    category: "Industry Insights",
    excerpt:
      "Exploring the fine line between confidence and narcissism in software development...",
    content: `Today I witnessed an interesting code review that made me reflect on narcissism in tech. Here's what I observed and learned.

The Confidence Spectrum:
1. Healthy Confidence
- Open to feedback
- Shares knowledge freely
- Admits mistakes
- Supports team growth

2. Narcissistic Traits
- Dismissive of others' code
- Claims ownership of team successes
- Refuses to document
- Creates unnecessarily complex solutions

Impact on Teams:
- Knowledge hoarding
- Reduced collaboration
- Technical debt
- Team turnover

Solutions I've Found:
1. Regular code reviews
2. Pair programming
3. Documentation requirements
4. Team retrospectives

The key is balancing technical excellence with humility. Great code speaks for itself without needing its author to defend it constantly.`,
    mood: "contemplative",
  },
];
