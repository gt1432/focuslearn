export const predefinedRoadmaps = {
    "Web Development": [
        { 
            day: 1, title: "HTML Basics", url: "https://www.youtube.com/watch?v=UB1O30fR-EE", 
            questions: [
                { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlinks Text Mark Language", "None"], correctAnswer: 0 },
                { question: "Which tag defines the largest heading?", options: ["<p>", "<h6>", "<h1>", "<div>"], correctAnswer: 2 },
                { question: "Is <html> a mandatory top-level tag in an HTML document?", options: ["Yes", "No", "Only for CSS", "Only for JS"], correctAnswer: 0 }
            ]
        },
        { 
            day: 2, title: "HTML Forms", url: "https://www.youtube.com/watch?v=fNcJuPIZ2WE",
            questions: [
                { question: "Which attribute is used to identify form data on the server?", options: ["id", "class", "name", "style"], correctAnswer: 2 },
                { question: "Which tag is used to create a dropdown list in a form?", options: ["<input>", "<select>", "<textarea>", "<option>"], correctAnswer: 1 },
                { question: "What does the 'action' attribute in a <form> tag specify?", options: ["The CSS class", "Where to send form data", "The font color", "The form width"], correctAnswer: 1 }
            ]
        },
        { 
            day: 3, title: "CSS Basics", url: "https://www.youtube.com/watch?v=yfoY53QXEnI",
            questions: [
                { question: "Which CSS property is used to change the background color?", options: ["color", "background-color", "border-color", "fill"], correctAnswer: 1 },
                { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Complex Style Syntax"], correctAnswer: 1 },
                { question: "How do you select an element with id='header' in CSS?", options: [".header", "#header", "header", "*header"], correctAnswer: 1 }
            ]
        }
        // ... more days can be added following this pattern
    ],
    "Artificial Intelligence": [
        { 
            day: 1, title: "AI Basics", url: "https://www.youtube.com/watch?v=2ePf9rue1Ao",
            questions: [
                { question: "What is the primary goal of Artificial Intelligence?", options: ["Creating hardware", "Enabling machines to mimic human intelligence", "Building websites", "Sending emails"], correctAnswer: 1 },
                { question: "Which of these is a subset of AI that focuses on learning from data?", options: ["Robotics", "Machine Learning", "Cloud Computing", "Networking"], correctAnswer: 1 },
                { question: "Who is often called the 'Father of AI'?", options: ["Steve Jobs", "Alan Turing", "John McCarthy", "Bill Gates"], correctAnswer: 2 }
            ]
        }
    ]
    // ... logic in api.js will fill in generic ones for unspecified days/tracks
};
