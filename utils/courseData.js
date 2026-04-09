export const predefinedRoadmaps = {
    "Web Development": [
        { 
            day: 1, title: "HTML Basics", url: "https://www.youtube.com/watch?v=UB1O30fR-EE", 
            quiz: { question: "Which tag is used for the largest heading in HTML?", options: ["<p>", "<h6>", "<h1>", "<div>"], correctAnswer: 2 }
        },
        { 
            day: 2, title: "HTML Forms", url: "https://www.youtube.com/watch?v=fNcJuPIZ2WE",
            quiz: { question: "Following our HTML basics, which attribute is required in an <input> to identify data on the server?", options: ["id", "class", "name", "style"], correctAnswer: 2 }
        },
        { 
            day: 3, title: "CSS Basics", url: "https://www.youtube.com/watch?v=yfoY53QXEnI",
            quiz: { question: "Now that we have HTML structure, which property is used to change the background color in CSS?", options: ["color", "background-color", "border-color", "fill"], correctAnswer: 1 }
        },
        { 
            day: 4, title: "Flexbox", url: "https://www.youtube.com/watch?v=JJSoEo8JSnc",
            quiz: { question: "Building on CSS styling, which property defines the main axis direction in a Flex container?", options: ["flex-wrap", "justify-content", "align-items", "flex-direction"], correctAnswer: 3 }
        },
        { 
            day: 5, title: "Responsive Design", url: "https://www.youtube.com/watch?v=srvUrASNj0s",
            quiz: { question: "To make our Flex layouts work on mobile, which CSS rule allows applied styles based on screen width?", options: ["@import", "@media", "@font-face", "@keyframes"], correctAnswer: 1 }
        },
        { 
            day: 6, title: "JavaScript Basics", url: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
            quiz: { question: "Moving from styling to logic, how do you declare a variable that can be reassigned in modern JS?", options: ["const", "var", "let", "static"], correctAnswer: 2 }
        },
        { 
            day: 7, title: "DOM Manipulation", url: "https://www.youtube.com/watch?v=0ik6X4DJKCc",
            quiz: { question: "Using JS on our HTML elements, which method selects an element by its ID?", options: ["getElementByClass", "querySelector", "getElementById", "getElementByTag"], correctAnswer: 2 }
        },
        { 
            day: 8, title: "Events", url: "https://www.youtube.com/watch?v=XF1_MlZ5l6M",
            quiz: { question: "To make our DOM manipulation interactive, which function attaches an event listener to an element?", options: ["onClick()", "addEventListener()", "triggerEvent()", "handle()"], correctAnswer: 1 }
        },
        { 
            day: 9, title: "Mini Project", url: "https://www.youtube.com/watch?v=3PHXvlpOkf4",
            quiz: { question: "When building your project, what is the best way to debug JavaScript code in the browser?", options: ["alert()", "console.log()", "print()", "write()"], correctAnswer: 1 }
        },
        { 
            day: 10, title: "Deploy Website", url: "https://www.youtube.com/watch?v=nu_pCVPKzTk",
            quiz: { question: "Finally, which of these is a popular cloud platform used to host modern web applications for free?", options: ["Excel", "Netlify", "Photoshop", "Notepad++"], correctAnswer: 1 }
        }
    ],
    "Python Programming": [
        { 
            day: 1, title: "Python Basics", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
            quiz: { question: "Which function is used to display text on the screen in Python?", options: ["echo()", "print()", "show()", "write()"], correctAnswer: 1 }
        },
        { 
            day: 2, title: "Python Basics Cont.", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
            quiz: { question: "In Python basics, how do you start a single-line comment?", options: ["//", "/*", "#", "--"], correctAnswer: 2 }
        },
        { 
            day: 3, title: "Variables", url: "https://www.youtube.com/watch?v=khKv-8q7YmY",
            quiz: { question: "Which of these is a valid variable name in Python?", options: ["2my_var", "my-var", "my_var", "my var"], correctAnswer: 2 }
        },
        { 
            day: 4, title: "Loops", url: "https://www.youtube.com/watch?v=6iF8Xb7Z3wQ",
            quiz: { question: "Which keyword is used to iterate over a sequence (like a list) in Python?", options: ["while", "for", "loop", "repeat"], correctAnswer: 1 }
        },
        { 
            day: 5, title: "Functions", url: "https://www.youtube.com/watch?v=9Os0o3wzS_I",
            quiz: { question: "Which keyword is used to create a function in Python?", options: ["func", "function", "define", "def"], correctAnswer: 3 }
        },
        { 
            day: 6, title: "Lists", url: "https://www.youtube.com/watch?v=ohCDWZgNIU0",
            quiz: { question: "How do you add an item to the end of a list in Python?", options: [".add()", ".insert()", ".append()", ".push()"], correctAnswer: 2 }
        },
        { 
            day: 7, title: "NumPy", url: "https://www.youtube.com/watch?v=QUT1VHiLmmI",
            quiz: { question: "Moving to data libraries, what is the primary data structure in NumPy?", options: ["List", "Dictionary", "ndArray", "Tuple"], correctAnswer: 2 }
        },
        { 
            day: 8, title: "Pandas", url: "https://www.youtube.com/watch?v=vmEHCJofslg",
            quiz: { question: "Using Pandas for data analysis, which object is used for 2D tabular data?", options: ["Series", "DataFrame", "Matrix", "Panel"], correctAnswer: 1 }
        },
        { 
            day: 9, title: "Visualization", url: "https://www.youtube.com/watch?v=UO98lJQ3QGI",
            quiz: { question: "Which library is most commonly used for creating static plots in Python?", options: ["Django", "Requests", "Matplotlib", "Flask"], correctAnswer: 2 }
        },
        { 
            day: 10, title: "Mini Project", url: "https://www.youtube.com/watch?v=ua-CiDNNj30",
            quiz: { question: "When finalizing your Python project, which file extension is used for Python scripts?", options: [".pt", ".py", ".pyt", ".p"], correctAnswer: 1 }
        }
    ],
    "Artificial Intelligence": [
        { 
            day: 1, title: "AI Basics", url: "https://www.youtube.com/watch?v=2ePf9rue1Ao",
            quiz: { question: "What does 'AI' stand for in the context of computer science?", options: ["Automated Insight", "Artificial Intelligence", "Advanced Interaction", "Applied Information"], correctAnswer: 1 }
        },
        { 
            day: 2, title: "ML Intro", url: "https://www.youtube.com/watch?v=Gv9_4yMHFhI",
            quiz: { question: "Following AI basics, what is Machine Learning?", options: ["Hard-coding rules", "Teaching computers to learn from data", "Building physical robots", "Designing web UI"], correctAnswer: 1 }
        },
        { 
            day: 3, title: "Types of ML", url: "https://www.youtube.com/watch?v=ukzFI9rgwfU",
            quiz: { question: "Which type of ML involves training on 'labeled' data?", options: ["Unsupervised", "Reinforcement", "Supervised", "Clustering"], correctAnswer: 2 }
        },
        { 
            day: 4, title: "Linear Regression", url: "https://www.youtube.com/watch?v=nk2CQITm_eo",
            quiz: { question: "In supervised learning, what does Linear Regression predict?", options: ["Categories", "Continuous numeric values", "Image labels", "Cluster groups"], correctAnswer: 1 }
        },
        { 
            day: 5, title: "Data Preprocessing", url: "https://www.youtube.com/watch?v=0xVqLJe9_CY",
            quiz: { question: "Before training a model, why do we handle 'missing values' in our data?", options: ["To make the CSV file smaller", "To avoid errors and biased model training", "To change the font of the data", "To encrypt the information"], correctAnswer: 1 }
        },
        { 
            day: 6, title: "Classification", url: "https://www.youtube.com/watch?v=uzayzV1xk2k",
            quiz: { question: "Unlike regression, what is the goal of a Classification model?", options: ["Predicting a number", "Predicting a discrete category/label", "Calculating averages", "Sorting lists"], correctAnswer: 1 }
        },
        { 
            day: 7, title: "Model Training", url: "https://www.youtube.com/watch?v=7eh4d6sabA0",
            quiz: { question: "What is the common split ratio for Train/Test data?", options: ["50/50", "10/90", "80/20", "100/0"], correctAnswer: 2 }
        },
        { 
            day: 8, title: "Evaluation", url: "https://www.youtube.com/watch?v=85dtiMz9tSo",
            quiz: { question: "Which metric measures the percentage of correct predictions?", options: ["Loss", "Epoch", "Accuracy", "Iteration"], correctAnswer: 2 }
        },
        { 
            day: 9, title: "Build Model", url: "https://www.youtube.com/watch?v=KNAWp2S3w94",
            quiz: { question: "In Python, which library is 'the' industry standard for traditional Machine Learning?", options: ["Django", "React", "Scikit-Learn", "Matplotlib"], correctAnswer: 2 }
        },
        { 
            day: 10, title: "Final Project", url: "https://www.youtube.com/watch?v=i_LwzRVP7bg",
            quiz: { question: "When finalizing an AI model, what is 'Overfitting'?", options: ["Model is too small", "Model learns training data noise too well and fails on new data", "Model runs too fast", "Model uses too much RAM"], correctAnswer: 1 }
        }
    ],
    "UI/UX Design": [
        { 
            day: 1, title: "UI Basics", url: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU",
            quiz: { question: "What does 'UI' stand for?", options: ["Ultimate Interface", "User Interaction", "User Interface", "Universal Information"], correctAnswer: 2 }
        },
        { 
            day: 2, title: "UX Principles", url: "https://www.youtube.com/watch?v=Ovj4hFxko7c",
            quiz: { question: "Following UI basics, what is the primary focus of 'UX'?", options: ["Making buttons pretty", "The overall feel and efficiency of the user's journey", "Writing code", "Database architecture"], correctAnswer: 1 }
        },
        { 
            day: 3, title: "Color Theory", url: "https://www.youtube.com/watch?v=_2LLXnUdUIc",
            quiz: { question: "In UI design, which color is often used to signify 'Danger' or 'Errors'?", options: ["Blue", "Green", "Red", "Yellow"], correctAnswer: 2 }
        },
        { 
            day: 4, title: "Typography", url: "https://www.youtube.com/watch?v=sByzHoiYFX0",
            quiz: { question: "Which font type is generally considered more readable for long body text on digital screens?", options: ["Script", "Sans-Serif", "Serif", "Monospace"], correctAnswer: 1 }
        },
        { 
            day: 5, title: "Wireframing", url: "https://www.youtube.com/watch?v=qpH7-KFWZRI",
            quiz: { question: "What is a 'Wireframe' in the design process?", options: ["A finished high-fidelity mockup", "A low-fidelity structural blueprint of a page", "A type of database", "A CSS framework"], correctAnswer: 1 }
        },
        { 
            day: 6, title: "Figma Basics", url: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
            quiz: { question: "Which cloud-based tool is currently the industry leader for collaborative UI/UX design?", options: ["Photoshop", "Figma", "Excel", "PowerPoint"], correctAnswer: 1 }
        },
        { 
            day: 7, title: "Prototyping", url: "https://www.youtube.com/watch?v=4W4LvJnNegA",
            quiz: { question: "What is the purpose of an interactive Prototype?", options: ["To store user data", "To simulate the final app behavior for testing", "To compile code", "To design logos"], correctAnswer: 1 }
        },
        { 
            day: 8, title: "Design Systems", url: "https://www.youtube.com/watch?v=wc5krBqTUXE",
            quiz: { question: "In a Design System, what is a 'Component'?", options: ["A single line of code", "A reusable UI element like a Button or Input", "A server-side script", "A database table"], correctAnswer: 1 }
        },
        { 
            day: 9, title: "UI Project", url: "https://www.youtube.com/watch?v=PeGfXH1Zk8E",
            quiz: { question: "When building your UI project, what does 'Whitespace' refer to?", options: ["Colors that aren't black", "Negative space between elements to improve clarity", "Empty image tags", "Code comments"], correctAnswer: 1 }
        },
        { 
            day: 10, title: "Portfolio", url: "https://www.youtube.com/watch?v=J9Y6wIfFh3Y",
            quiz: { question: "Why is a design Portfolio important?", options: ["It stores your passwords", "It showcases your process and completed work to employers", "It's a requirement for Windows", "It helps with SEO"], correctAnswer: 1 }
        }
    ],
    "Data Science": [
        { 
            day: 1, title: "Intro to Data Science", url: "https://www.youtube.com/watch?v=X3paOmcrTjQ",
            quiz: { question: "What is the main goal of Data Science?", options: ["Repairing computers", "Extracting meaningful insights and knowledge from data", "Building websites", "Graphic design"], correctAnswer: 1 }
        },
        { 
            day: 2, title: "Python Setup", url: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
            quiz: { question: "In Data Science, why is Python the preferred language?", options: ["It's the fastest language", "It has extensive libraries for data analysis (NumPy, Pandas)", "It's owned by Google", "It doesn't require a computer"], correctAnswer: 1 }
        },
        { 
            day: 3, title: "Data Handling", url: "https://www.youtube.com/watch?v=vmEHCJofslg",
            quiz: { question: "Which library is used for manipulating 'Dataframes' in Python?", options: ["Django", "Requests", "Pandas", "PyQt"], correctAnswer: 2 }
        },
        { 
            day: 4, title: "Data Cleaning", url: "https://www.youtube.com/watch?v=Y1gYvH9nR2I",
            quiz: { question: "What does 'Data Cleaning' involve?", options: ["Wiping your monitor", "Handling missing, duplicate, or incorrect data", "Sorting folders", "Writing documentation"], correctAnswer: 1 }
        },
        { 
            day: 5, title: "Visualization", url: "https://www.youtube.com/watch?v=UO98lJQ3QGI",
            quiz: { question: "Which specialized library is built on Matplotlib and offers high-level interfaces for statistical plots?", options: ["Flask", "Seaborn", "TensorFlow", "BeautifulSoup"], correctAnswer: 1 }
        },
        { 
            day: 6, title: "Statistics Basics", url: "https://www.youtube.com/watch?v=xxpc-HPKN28",
            quiz: { question: "In statistics, what is 'the mean'?", options: ["The middle value", "The average value", "The most frequent value", "The highest value"], correctAnswer: 1 }
        },
        { 
            day: 7, title: "Machine Learning Intro", url: "https://www.youtube.com/watch?v=Gv9_4yMHFhI",
            quiz: { question: "Linking Data Science to AI, what is Machine Learning?", options: ["Adding more data", "Using statistical models to allow computers to find patterns", "Building hardware", "Designing apps"], correctAnswer: 1 }
        },
        { 
            day: 8, title: "Regression", url: "https://www.youtube.com/watch?v=nk2CQITm_eo",
            quiz: { question: "In Regression, what are we trying to predict?", options: ["A categorical label", "A continuous numerical value", "Usernames", "Colors"], correctAnswer: 1 }
        },
        { 
            day: 9, title: "Model Evaluation", url: "https://www.youtube.com/watch?v=85dtiMz9tSo",
            quiz: { question: "Why is Model Evaluation important?", options: ["To make the code look better", "To understand how accurately the model performs on unseen data", "To increase RAM usage", "To finish the course"], correctAnswer: 1 }
        },
        { 
            day: 10, title: "Data Project", url: "https://www.youtube.com/watch?v=ua-CiDNNj30",
            quiz: { question: "What is the best format to share a Data Science report?", options: ["Excel Sheet", "Jupyter Notebook / PDF", "Text file", "PowerPoint"], correctAnswer: 1 }
        }
    ]
};
