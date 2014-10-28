module.exports = {

    prompts: false,
    outPath: "www/",

    // These are variables will be accessible via our templates
    templateData: {

        // Conference info
        conf: {
            name: "Great teams are built of great people. December 4-5, 2014",
            tagline: "Leadership and management conference",
            description: "Stretch is a leadership and management conference to learn from the best and stretch yourself. Join us in Budapest, Hungary this December and get inspired by stories from leaders in great organizations as they talk about the challenges of leadership coming from within the team.",
            date: "December 4-5, 2014 - Budapest",
            price: "$???",
            venue: "Uránia National Film Theatre",
            address: "1088 Rákóczi Way 21",
            city: "Budapest",
            state: "Hungary",
            latitude: "47.495632",
            longitude: "19.065138"
        },

        // Site info
        site: {
            theme: "stretchcon",
            url: "http://stretchcon.com/2014/",
            googleanalytics: "UA-43412556-1"
        },

        // Active sections on the website
        // to deactivate comment out with '//'
        // you can also change order here and it will reflect on page
        sections: [
            //'summary',
            //'photos',
            'about',
            //'schedule',
            'speakers',
            'location',
            'tickets',
            'sponsors',
            'organizers',
            'contact'
        ],

        // Labels which you can translate to other languages
        labels: {
            about: "About",
            location: "Location",
            speakers: "Speakers",
            schedule: "Schedule",
            tickets: "Tickets",
            sponsors: "Sponsors",
            organizers: "Organizers",
            contact: "Contact"
        },

        schedule: [
            {
                header: "Day 1 (Thursday)",
                slots: [
                    {
                        time: "08:45 - 09:45",
                        title: "Registration & Breakfast"
                    },
                    {
                        time: "09:45 - 10:00",
                        title: "Welcome"
                    },
                    {
                        time: "10:00 - 10:40",
                        title: "Non-intuitive strategies for success",
                        keynote: true,
                        speaker: true,
                        recordedUrl: "http://www.ustream.tv/recorded/41391884/highlight/442620"
                    },
                    {
                        time: "10:40 - 11:20",
                        title: "Leading a learning organization",
                        speaker: true,
                        recordedUrl: "http://www.ustream.tv/recorded/41391884/highlight/442623",
                        presentationUrl: "https://prezi.com/bh84olgmbcqm/leading-a-learning-organization-stretch/",
                    },
                    {
                        time: "11:20 - 11:40",
                        title: "Break"
                    },
                    {
                        time: "11:40 - 12:20",
                        title: "Does your team fit? From Idea to International Success, practical tips and lessons learnt",
                        speaker: true,
                        recordedUrl: "http://www.ustream.tv/recorded/41394346/highlight/442652",
                        presentationUrl: "http://goo.gl/Oys8A4",
                    },
                    {
                        time: "12:20 - 13:00",
                        title: "How Agile Coaches help us win—the Agile Coach role at Spotify",
                        speaker: true,
                        recordedUrl: "http://www.ustream.tv/recorded/41394346/highlight/442656",
                        presentationUrl: "https://drive.google.com/file/d/0B21W5ntVUsoMMjJBWjcycTZYcjQ/edit?usp=sharing",
                    },
                    {
                        time: "13:00 - 14:10",
                        title: "Lunch"
                    },
                    {
                        time: "14:10 - 14:20",
                        title: "Sponsor Pitches"
                    },
                    {
                        time: "14:20 - 15:00",
                        title: "Getting our brains to sing together",
                        speaker: true,
                        recordedUrl: "http://www.ustream.tv/recorded/41397690/highlight/443646",
                        presentationUrl: "https://drive.google.com/file/d/0B9Pcexls_M0CNjJRVTQ4ODBVdmFOMHRwXzZLVTQ4b1FSdTFN/edit?usp=sharing",
                    },
                    {
                        time: "15:00 - 15:40",
                        title: "Great teams start with great people, goals, and practices... but is that enough?",
                        speaker: true,
                        recordedUrl: "http://www.ustream.tv/recorded/41398692/highlight/443648"
                    },
                    {
                        time: "15:40 - 16:00",
                        title: "Break"
                    },
                    {
                        time: "16:00 - 16:40",
                        title: "People don't quit their job, they quit their boss",
                        speaker: true,
                        recordedUrl: "http://www.ustream.tv/recorded/41400204/highlight/443649",
                        presentationUrl: "https://speakerdeck.com/orenellenbogen/strechconf-2013-people-dont-quit-their-job-they-quit-their-boss",
                    },
                    {
                        time: "16:40 - 17:00",
                        title: "Closing"
                    },
                    {
                        time: "17:00 - 20:00",
                        title: "Snacks & Drinks"
                    },
                    {
                        time: "20:00",
                        title: "After Party @ Kocka (45 Kazinczy)"
                    }
                ]
            },
            {
                header: "Day 2 (Friday)",
                slots: [
                    {
                        time: "09:00 - 10:00",
                        title: "Registration & Breakfast"
                    },
                    {
                        time: "10:00 - 10:40",
                        title: "Offer hope to your staff: build a culture of learning",
                        keynote: true,
                        speaker: true,
                        recordedUrl: "http://www.ustream.tv/recorded/41424807/highlight/443655",
                        presentationUrl: "http://www.slideshare.net/sarahnovotny/learningculture-portraits",
                    },
                    {
                        time: "10:40 - 11:20",
                        title: "The role of the manager in modern tech organizations",
                        speaker: true,
                        recordedUrl: "http://www.ustream.tv/recorded/41424807/highlight/443657",
                        presentationUrl: "http://www.slideshare.net/andreasehn/stretch-2013-role-of-the-manager",
                    },
                    {
                        time: "11:20 - 11:40",
                        title: "Break"
                    },
                    {
                        time: "11:40 - 12:20",
                        title: "PostCards from the Future: Tipis for overcoming barriers to innovation",
                        speaker: true,
                        recordedUrl: "http://www.infoq.com/presentations/leadership-learning-business-needs",
                        presentationUrl: "https://prezi.com/dlbfavsgf9mn/postcards-from-the-future/",
                    },
                    {
                        time: "12:20 - 12:50",
                        title: "Panel and Q&A",
                        recordedUrl: "http://www.ustream.tv/recorded/41426796/highlight/443660"
                    },
                    {
                        time: "12:50 - 13:00",
                        title: "Organizor Pitches",
                        recordedUrl: "http://www.ustream.tv/recorded/41426796/highlight/443661"
                    },
                    {
                        time: "13:00 - 14:10",
                        title: "Lunch"
                    },
                    {
                        time: "14:10 - 14:20",
                        title: "Sponsor Pitches"
                    },
                    {
                        time: "14:20 - 15:00",
                        title: "Building great agile teams",
                        speaker: true
                    },
                    {
                        time: "15:00 - 15:40",
                        title: "The EPAM way managing from 0 to the Dow Jones",
                        speaker: true,
                        presentationUrl: "https://drive.google.com/file/d/0B6hXWVB6ezYbZjA1U3BaWDFvMlU/edit?usp=sharing",
                    },
                    {
                        time: "15:40 - 15:50",
                        title: "Break"
                    },
                    {
                        time: "15:50 - 16:30",
                        title: "CANCELLED—The Kemény method",
                        speaker: true
                    },
                    {
                        time: "16:30",
                        title: "Closing"
                    }
                ]
            }
        ],

        // Speakers and talks
        speakers: [
                   {
                   anchor: "DavidAllen",
                   name: "David Allen",
                   photo: "themes/stretchcon/img/davidallen.jpeg",
                   bio: "<p>David Allen is widely recognized as the world’s leading authority on personal and organizational productivity. His thirty years of pioneering research, coaching and education of some of the world’s highest-performing professionals has earned him Forbes’ recognition as one of the “Top five executive coaches” in the United States, and as one of the “Top 100 thought leaders” by Leadership Magazine. Fast Company hailed David Allen “One of the world’s most influential thinkers” in the arena of personal productivity, for his outstanding programs and writing on time and stress management, the power of aligned focus and vision, and his ground-breaking methodologies in management and executive peak performance.</p>",
                   company: "David Allen Company",
                   link: {
                   href: "http://twitter.com/gtdguy",
                   text: "@gtdguy"
                   },
                   presentation: {
                   //title: "Great teams start with great people, goals, and practices... but is that enough?",
                   //  description: "What makes great teams great? What brings them together to build great products? Ask a product manager and a project manager, and you'll get two different answers. Ask a hardcore developer and a team lead and you'll get two more. Great teams start with great people, with leaders and visionaries who set challenging and elevating goals, and tough-minded organizers who choose the right practices to build quality software. But is this enough to make a great product? What does it take to make a team gel into a truly collaborative mindset? Find out how great teams are built in this engaging talk from the bestselling O'Reilly author of <i>Beautiful Teams</i>.",
                   // day: "Day 1 (Thursday)",
                   //  time: "15:00 - 15:40",
                   }
                   },
                   {
                   anchor: "DavidMarquet",
                   name: "David Marquet",
                   photo: "themes/stretchcon/img/davidmarquet.jpg",
                   bio: "<p>Captain Marquet retired from the Navy in 2009, and speaks to businesses and groups who want to create empowering work environments that release the passion, initiative, and intellect of each person. This bold and highly effective leadership approach can be summarized as “give control, create leaders.” Doing so creates environments where we coax our inner superhero to action. He is the author of the award-winning book Turn the Ship Around! In 2012 Fortune Magazine called it the “best how-to manual anywhere for managers on delegating, training, and driving flawless execution.”</p>",
                   company: "Author, Turn the Ship Around!",
                   link: {
                   href: "http://twitter.com/ldavidmarquet",
                   text: "@ldavidmarquet"
                   },
                   presentation: {
                   //title: "Great teams start with great people, goals, and practices... but is that enough?",
                   //  description: "What makes great teams great? What brings them together to build great products? Ask a product manager and a project manager, and you'll get two different answers. Ask a hardcore developer and a team lead and you'll get two more. Great teams start with great people, with leaders and visionaries who set challenging and elevating goals, and tough-minded organizers who choose the right practices to build quality software. But is this enough to make a great product? What does it take to make a team gel into a truly collaborative mindset? Find out how great teams are built in this engaging talk from the bestselling O'Reilly author of <i>Beautiful Teams</i>.",
                   // day: "Day 1 (Thursday)",
                   //  time: "15:00 - 15:40",
                   }
                   },
                   {
                   anchor: "HughWilliams",
                   name: "Hugh Williams",
                   photo: "themes/stretchcon/img/hughwilliams.png",
                   bio: "<p>Hugh E. Williams is a technology executive who has worked at Pivotal, eBay, and Microsoft. He's also spent a significant part of his career as an Associate Professor and running his own startup. He has built teams rapidly from 2 to 300, and restructured 1,000-person technology organizations and reinvigorated technical cultures. Along the way, he's learnt how to build large organizations from empowered small teams that can change the world. He enjoys writing, and has published over 100 works, including two books for O'Reilly Media Inc. He holds 19 U.S. patents, with many more pending. He has a PhD from RMIT University in Australia.</p>",
                   company: "Pivotal",
                   link: {
                   href: "http://twitter.com/hughewilliams ",
                   text: "@hughewilliams "
                   },
                   presentation: {
                   //title: "Great teams start with great people, goals, and practices... but is that enough?",
                   //  description: "What makes great teams great? What brings them together to build great products? Ask a product manager and a project manager, and you'll get two different answers. Ask a hardcore developer and a team lead and you'll get two more. Great teams start with great people, with leaders and visionaries who set challenging and elevating goals, and tough-minded organizers who choose the right practices to build quality software. But is this enough to make a great product? What does it take to make a team gel into a truly collaborative mindset? Find out how great teams are built in this engaging talk from the bestselling O'Reilly author of <i>Beautiful Teams</i>.",
                   // day: "Day 1 (Thursday)",
                   //  time: "15:00 - 15:40",
                   }
                   },
                   {
                   anchor: "TyAmell",
                   name: "Ty Amell",
                   photo: "themes/stretchcon/img/TyAmell.jpeg",
                   bio: "<p>Ty is a Director of Engineering at PayPal. Ty joined PayPal after they acquired StackMob, where he was CEO and Founder. StackMob was the original backend-as-a-service started in 2010 and grew rapidly over 4 years before being acquired by PayPal in December 2013. Prior to StackMob, Ty headed mobile, API, and frontend teams at imeem, a music social platform. He built out imeem’s mobile applications to over 1.2 million users. </p>",
                   company: "PayPal",
                   link: {
                   href: "http://twitter.com/tyamell",
                   text: "@tyamell"
                   },
                   presentation: {
                   //title: "Great teams start with great people, goals, and practices... but is that enough?",
                   //  description: "What makes great teams great? What brings them together to build great products? Ask a product manager and a project manager, and you'll get two different answers. Ask a hardcore developer and a team lead and you'll get two more. Great teams start with great people, with leaders and visionaries who set challenging and elevating goals, and tough-minded organizers who choose the right practices to build quality software. But is this enough to make a great product? What does it take to make a team gel into a truly collaborative mindset? Find out how great teams are built in this engaging talk from the bestselling O'Reilly author of <i>Beautiful Teams</i>.",
                   // day: "Day 1 (Thursday)",
                   //  time: "15:00 - 15:40",
                   }
                   },

                   {
                   anchor: "JanNolte",
                   name: "Jan Nolte",
                   photo: "themes/stretchcon/img/jannolte.jpg",
                   bio: "<p>Jan Nolte is an Executive Communication and Voice Coach. Her method integrates over 25 years of professional acting, directing, producing and certified coaching skills. As a voice coach for actors in NYC, Jan was a professor at New York University Tisch School of the Arts and the Acting Conservatory at Purchase College. Her professional coaching benefitted performers from Carnegie Hall to CBS television to California. Today Jan is changing the voice of leadership as she directs senior execs at Fortune 500 companies and global not-for-profits to speak with integrity, listen strategically and follow their instincts. Jan is also the mother of 2 who resides in New York. She is active in several young adult leadership development initiatives including Impact Leadership 21 and Amigos de las Americas.</p>",
                   company: "The Influential Voice",
                   link: {
                   href: "http://twitter.com/noltejan",
                   text: "@noltejan"
                   },
                   presentation: {
                   //title: "Great teams start with great people, goals, and practices... but is that enough?",
                   //  description: "What makes great teams great? What brings them together to build great products? Ask a product manager and a project manager, and you'll get two different answers. Ask a hardcore developer and a team lead and you'll get two more. Great teams start with great people, with leaders and visionaries who set challenging and elevating goals, and tough-minded organizers who choose the right practices to build quality software. But is this enough to make a great product? What does it take to make a team gel into a truly collaborative mindset? Find out how great teams are built in this engaging talk from the bestselling O'Reilly author of <i>Beautiful Teams</i>.",
                   // day: "Day 1 (Thursday)",
                   //  time: "15:00 - 15:40",
                   }
                   },
                   {
                   anchor: "PeterHeslin",
                   name: "Peter Heslin",
                   photo: "themes/stretchcon/img/peterheslin.jpg",
                   bio: "<p>Peter is a proud dad and Associate Professor of Management at UNSW Australia. His research focuses on self-regulatory dynamics in leadership and career success. Peter is particularly fascinated by the role of a person’s prevailing mindset in how well they think, feel, act, and interact with others, so conducts scholarly research and delivers workshops on enabling growth mindsets to leading corporations, as well as pro bono for little-known non-profits. His related passion is helping people discover how to bring out the best in themselves and others. Peter is a Warrane College Academic Fellow and was elected the 2013-14 Chair of the Academy of Management Careers Division. ”</p>",
                   company: "UNSW Australia",
                   link: {
                   //href: "http://twitter.com/DesInnGro",
                   //text: "@DesInnGro"
                   },
                   presentation: {
                   //title: "Great teams start with great people, goals, and practices... but is that enough?",
                   //  description: "What makes great teams great? What brings them together to build great products? Ask a product manager and a project manager, and you'll get two different answers. Ask a hardcore developer and a team lead and you'll get two more. Great teams start with great people, with leaders and visionaries who set challenging and elevating goals, and tough-minded organizers who choose the right practices to build quality software. But is this enough to make a great product? What does it take to make a team gel into a truly collaborative mindset? Find out how great teams are built in this engaging talk from the bestselling O'Reilly author of <i>Beautiful Teams</i>.",
                   // day: "Day 1 (Thursday)",
                   //  time: "15:00 - 15:40",
                   }
                   },

                   {
                   anchor: "MariekeRietbergen",
                   name: "Marieke Rietbergen",
                   photo: "themes/stretchcon/img/mariekerietbergen.jpg",
                   bio: "<p>Marieke Rietbergen is the founder of Design Innovation Group. She is a creative collaborator with a passion for human-centered innovation. She believes in the value of creative processes, and the potential they have to accelerate positive change. Marieke is a mother of two. She enjoys being surprised by the weird and wonderful and being aesthetically pleased. She believes in the value of connecting diverse perspectives and has an extensive network of great minds to draw upon. Her enthusiasm for ideas is complemented by her proactive energy, applied to making ideas happen. Marieke believes that bringing together design thinking and business sense, in people, methods and instruments will create more succesful innovative - and profitable - products, services and strategies. She loves to bring together people with different backgrounds. And she believes in getting things done. ”</p>",
                   company: "Design Innovation Group",
                   link: {
                   href: "http://twitter.com/DesInnGro",
                   text: "@DesInnGro"
                   },
                   presentation: {
                   //title: "Great teams start with great people, goals, and practices... but is that enough?",
                   //  description: "What makes great teams great? What brings them together to build great products? Ask a product manager and a project manager, and you'll get two different answers. Ask a hardcore developer and a team lead and you'll get two more. Great teams start with great people, with leaders and visionaries who set challenging and elevating goals, and tough-minded organizers who choose the right practices to build quality software. But is this enough to make a great product? What does it take to make a team gel into a truly collaborative mindset? Find out how great teams are built in this engaging talk from the bestselling O'Reilly author of <i>Beautiful Teams</i>.",
                   // day: "Day 1 (Thursday)",
                   //  time: "15:00 - 15:40",
                   }
                   },

                   {
                   anchor: "JohnBlakey",
                   name: "John Blakey",
                   photo: "themes/stretchcon/img/johnblakey.jpg",
                   bio: "<p>John is one of the UK’s leading executive coaches and board advisors having worked with CEOs around the globe, as well as with Olympic medallists and Team GB / England sports coaches in rowing, cricket and target shooting. In his business career, John has been a Fast Track 100 entrepreneur, FTSE100 International Managing Director and Chair/Director of a number of voluntary organisations, working collaboratively in diverse teams to deliver outstanding results. He is an experienced international speaker and co-author with Ian Day of the best-selling leadership coaching book 'Challenging Coaching' which has been featured in the Sunday Times, the Guardian and the Financial Times.</p>",
                   company: "Author – Challenging Coaching",
                   link: {
                   //href: "http://twitter.com/noltejan",
                   //text: "@noltejan"
                   },
                   presentation: {
                   //title: "Great teams start with great people, goals, and practices... but is that enough?",
                   //  description: "What makes great teams great? What brings them together to build great products? Ask a product manager and a project manager, and you'll get two different answers. Ask a hardcore developer and a team lead and you'll get two more. Great teams start with great people, with leaders and visionaries who set challenging and elevating goals, and tough-minded organizers who choose the right practices to build quality software. But is this enough to make a great product? What does it take to make a team gel into a truly collaborative mindset? Find out how great teams are built in this engaging talk from the bestselling O'Reilly author of <i>Beautiful Teams</i>.",
                   // day: "Day 1 (Thursday)",
                   //  time: "15:00 - 15:40",
                   }
                   },
                   {
                   anchor: "PeterSegal",
                   name: "Peter Segal",
                   photo: "themes/stretchcon/img/petersegal.png",
                   bio: "<p>A former attorney then corporate executive and entrepreneur now accredited business coach, facilitator and speaker. A former member of Young President’s Organization. In the past several years Peter helped his clients both for and non profit organizations and individuals in Asia and Europe to grow their business and improve their performance.</p>",
                   company: "World Mission",
                   link: {
                   //href: "http://twitter.com/noltejan",
                   //ßtext: "@noltejan"
                   },
                   presentation: {
                   //title: "Great teams start with great people, goals, and practices... but is that enough?",
                   //  description: "What makes great teams great? What brings them together to build great products? Ask a product manager and a project manager, and you'll get two different answers. Ask a hardcore developer and a team lead and you'll get two more. Great teams start with great people, with leaders and visionaries who set challenging and elevating goals, and tough-minded organizers who choose the right practices to build quality software. But is this enough to make a great product? What does it take to make a team gel into a truly collaborative mindset? Find out how great teams are built in this engaging talk from the bestselling O'Reilly author of <i>Beautiful Teams</i>.",
                   // day: "Day 1 (Thursday)",
                   //  time: "15:00 - 15:40",
                   }
                   },
                   {
                   anchor: "AlexCottin",
                   name: "Alex Cottin",
                   photo: "themes/stretchcon/img/alexcottin.jpg",
                   bio: "<p>Driven by a blend of academic, personal and professional experiences, Alex believes in leveraging public and private partnerships as an important change agent which can help bring about sustainable and peaceful social change. Alex is currently the Associate Director of External Relations at Action Against Hunger, an international humanitarian organization which works to save the lives of malnourished children in 45 countries while providing communities with access to safe water and sustainable solutions to hunger. In this capacity, he is responsible for developing and implementing strategies and creating relationships that lead to support from corporate and foundations sources.</p>",
                   company: "Action Against Hunger",
                   link: {
                   href: "http://twitter.com/acottin17",
                   text: "@acottin17"
                   },
                   presentation: {
                   //title: "Great teams start with great people, goals, and practices... but is that enough?",
                   //  description: "What makes great teams great? What brings them together to build great products? Ask a product manager and a project manager, and you'll get two different answers. Ask a hardcore developer and a team lead and you'll get two more. Great teams start with great people, with leaders and visionaries who set challenging and elevating goals, and tough-minded organizers who choose the right practices to build quality software. But is this enough to make a great product? What does it take to make a team gel into a truly collaborative mindset? Find out how great teams are built in this engaging talk from the bestselling O'Reilly author of <i>Beautiful Teams</i>.",
                   // day: "Day 1 (Thursday)",
                   //  time: "15:00 - 15:40",
                   }
                   },
                   {
                   anchor: "HenriKivioja",
                   name: "Henri Kivioja",
                   photo: "themes/stretchcon/img/henrikivioja.jpg",
                   bio: "<p>Henri is Head Coach at Ericsson Finland. He has been working in R&D more than 13 years in different roles. His main insights come from scaling lean and agile into complex environment. Henri has been presenting his learnings in different conferences during past years and comes up always with a clear and inspiring message.</p>",
                   company: "Ericsson Finland",
                   link: {
                   //href: "http://twitter.com/eliast",
                   //text: "@eliast"
                   },
                   presentation: {
                   //title: "Great teams start with great people, goals, and practices... but is that enough?",
                   //  description: "What makes great teams great? What brings them together to build great products? Ask a product manager and a project manager, and you'll get two different answers. Ask a hardcore developer and a team lead and you'll get two more. Great teams start with great people, with leaders and visionaries who set challenging and elevating goals, and tough-minded organizers who choose the right practices to build quality software. But is this enough to make a great product? What does it take to make a team gel into a truly collaborative mindset? Find out how great teams are built in this engaging talk from the bestselling O'Reilly author of <i>Beautiful Teams</i>.",
                   // day: "Day 1 (Thursday)",
                   //  time: "15:00 - 15:40",
                   }
                   },
                   {
                   anchor: "SeanSouthey",
                   name: "Sean Southey",
                   photo: "themes/stretchcon/img/seansouthey.png",
                   bio: "<p>Sean is deeply committed to community empowerment, peace, and using creative media to facilitate powerful social change. A resourceful manager with over 24 years of experience in the development and communications field, Sean is the Chief Executive Officer at PCI Media Impact. Sean has a rich multi-sector background including 12 years with the United Nations Development Programme, 5 years with the Canadian government and 7 years working with international non-government organizations such as ICLEI (Secretary General), Rare (Vice-President) and PCI Media Impact. Sean is a dual Canadian and South African citizen and has lived and worked in over 70 countries. He holds a MSC from the London School of Economics and a BA in Economics from University of British Columbia, and has a wonderful daughter, Safia.</p>",
                   company: "PCI Media Impact",
                   link: {
                   href: "http://twitter.com/seansouthey",
                   text: "@seansouthey"
                   },
                   presentation: {
                   //title: "Great teams start with great people, goals, and practices... but is that enough?",
                   //  description: "What makes great teams great? What brings them together to build great products? Ask a product manager and a project manager, and you'll get two different answers. Ask a hardcore developer and a team lead and you'll get two more. Great teams start with great people, with leaders and visionaries who set challenging and elevating goals, and tough-minded organizers who choose the right practices to build quality software. But is this enough to make a great product? What does it take to make a team gel into a truly collaborative mindset? Find out how great teams are built in this engaging talk from the bestselling O'Reilly author of <i>Beautiful Teams</i>.",
                   // day: "Day 1 (Thursday)",
                   //  time: "15:00 - 15:40",
                   }
                   },
                   {
                   anchor: "RosemaryKing",
                   name: "RoseMary King",
                   photo: "themes/stretchcon/img/rosemaryking.jpg",
                   bio: "<p>Rosemary King is a Product Manager at Pivotal Labs.  Prior to Labs, Rosemary worked at ThoughtWorks and Case Commons, as a user researcher and product manager.  Before technology Rosemary worked in politics, advocacy and non-profit and strongly believes that user centered research can help build tools that can change the world. She also believes in the importance of having a life rich in hobbies and activities that get us into different mindsets and modes, and yes, she plays quite often. </p>",
                   company: "Pivotal",
                   link: {
                   href: "http://twitter.com/RozemaryKing",
                   text: "@RozemaryKing"
                   },
                   presentation: {
                   //title: "Great teams start with great people, goals, and practices... but is that enough?",
                   //  description: "What makes great teams great? What brings them together to build great products? Ask a product manager and a project manager, and you'll get two different answers. Ask a hardcore developer and a team lead and you'll get two more. Great teams start with great people, with leaders and visionaries who set challenging and elevating goals, and tough-minded organizers who choose the right practices to build quality software. But is this enough to make a great product? What does it take to make a team gel into a truly collaborative mindset? Find out how great teams are built in this engaging talk from the bestselling O'Reilly author of <i>Beautiful Teams</i>.",
                   // day: "Day 1 (Thursday)",
                   //  time: "15:00 - 15:40",
                   }
                   },
                   {
                   anchor: "PhilNash",
                   name: "Phil Nash",
                   photo: "themes/stretchcon/img/philnash.jpg",
                   bio: "<p>Phil started his career fascinated with the idea of making computers do anything he wanted. When he discovered this didn’t always work out he became fascinated with the idea of making code better. When he discovered this didn’t always work out he became fascinated with the idea of making coders better. When he discovered this didn’t always work out he became fascinated with the idea of making his own understanding of how to make coders and code better, better. In short he is easily fascinated. Along the way, outside of contract work, consulting, training and coaching he has authored open source projects such as Catch (a C++ & Objective-C test framework), Clara (a C++ command line parser) and several iOS apps. If you're not careful he also speaks at conferences and events.” </p>",
                   company: "Independent coach and consultant for Two Blue Cubes Ltd",
                   link: {
                   href: "http://twitter.com/phil_nash",
                   text: "@phil_nash"
                   },
                   presentation: {
                   //title: "Great teams start with great people, goals, and practices... but is that enough?",
                   //  description: "What makes great teams great? What brings them together to build great products? Ask a product manager and a project manager, and you'll get two different answers. Ask a hardcore developer and a team lead and you'll get two more. Great teams start with great people, with leaders and visionaries who set challenging and elevating goals, and tough-minded organizers who choose the right practices to build quality software. But is this enough to make a great product? What does it take to make a team gel into a truly collaborative mindset? Find out how great teams are built in this engaging talk from the bestselling O'Reilly author of <i>Beautiful Teams</i>.",
                   // day: "Day 1 (Thursday)",
                   //  time: "15:00 - 15:40",
                   }
                   },
                   {
                   anchor: "UriNativ",
                   name: "Uri Nativ",
                   photo: "themes/stretchcon/img/urinativ.jpg",
                   bio: "<p>Uri Nativ, VP Engineering and Site Manager of Klarna Tel Aviv. Has 16+ years working experience in various companies, from small startups to big corporates. Engineer by mind, people manager by heart. Uri has adopted Agile methodologies more than 7 years ago and had never let go since then. Uri constantly lectures about Agile, Methodologies, Culture and People in order to share and brainstorm new ideas. Uri is currently on a journey to build and grow Klarna Engineering Center in Israel.” </p>",
                   company: "Klarna",
                   link: {
                   href: "http://twitter.com/unativ",
                   text: "@unativ"
                   },
                   presentation: {
                   //title: "Great teams start with great people, goals, and practices... but is that enough?",
                   //  description: "What makes great teams great? What brings them together to build great products? Ask a product manager and a project manager, and you'll get two different answers. Ask a hardcore developer and a team lead and you'll get two more. Great teams start with great people, with leaders and visionaries who set challenging and elevating goals, and tough-minded organizers who choose the right practices to build quality software. But is this enough to make a great product? What does it take to make a team gel into a truly collaborative mindset? Find out how great teams are built in this engaging talk from the bestselling O'Reilly author of <i>Beautiful Teams</i>.",
                   // day: "Day 1 (Thursday)",
                   //  time: "15:00 - 15:40",
                   }
                   },



                                       /*
            {
                anchor: "MichaelLopp",
                name: "Michael Lopp",
                photo: "themes/stretchcon/img/michaellopp.jpg",
                bio: "<p>Michael Lopp is a Silicon Valley-based engineering leader who builds both people and software at companies such as Borland, Netscape, Apple, and Palantir. While he's not worrying about staying relevant, he writes about pens, bridges, people, poker, and werewolves at the popular weblog, Rands in Repose.</p><p>Michael has written two books. \"Being Geek\" is a career handbook for geeks and nerds alike. His first book \"Managing Humans, 2nd Edition\" is a popular guide to the art of engineering leadership and clearly explains that while you might be rewarded for what you build, you will only be successful because of your people. </p><p>Michael surfs, plays hockey, and drinks red wine in the redwoods of Northern California whenever he can because staying sane is more important than staying busy.</p>",
                company: "Author of Managing Humans",
                link: {
                    href: "http://twitter.com/rands",
                    text: "@rands"
                },
                presentation: {
                    title: "Non-intuitive strategies for success",
                    description: "You have a deep desire to build. Every so often, a thing you build creates unexpected value and you discover success. In this talk, I will argue that while your success is satisfying and perhaps profitable, continued success is often dependent on two non-intuitive strategies: hiring people who are willing to disrupt that success and your willingness to throw your success away.",
                    day: "Day 1 (Thursday)",
                    time: "10:00 - 10:40",
                }
            },
            {
                anchor: "AndrewClayShafer",
                name: "Andrew Clay Shafer",
                photo: "themes/stretchcon/img/andrewclayshafer.jpg",
                bio: "<p>Andrew Clay Shafer is regarded as a contributor to whatever 'devops' is and helping spread the body of knowledge now known by this name. As cofounder of Puppet Labs, Andrew help transformed the way people manage IT infrastructure. He popularized the concept of \"infrastructure as code\", and helps to improve IT with both tools and culture. Andrew is most happy when he is learning or teaching.</p>",
                company: "Thought Leaker",
                link: {
                    href: "http://twitter.com/littleidea",
                    text: "@littleidea"
                },
                presentation: {
                    title: "Leading a learning organization",
                    description: "Many management techniques are attempts to maximize productivity or predictability, but most fail to recognized, much less deal with, uncertainty. How good is fast feedback if nothing is learned? What does it mean to learn? People love to measure what they can measure, but does that necessarily lead to better decisions? better understanding? better outcomes? What are the true factors of success and failure?<br/><br/>This presentation will share new and not so new ideas about leadership and organizational learning as a competitive advantage, combining literature and personal experiences with a random walk through Agile, devops, lean startup, cynefin, anti-fragile, game theory, systems thinking, organizational learning and whatever other goodness can be squeezed in.",
                    day: "Day 1 (Thursday)",
                    time: "10:40 - 11:20",
                }
            },
            {
                anchor: "Spotify",
                name: "Brendan Marsh, Kristian Lindwall",
                photo: "themes/stretchcon/img/spotify.jpg",
                bio: "<p><strong>Brendan Marsh</strong> — <a href=\"http://twitter.com/brendanmarsh\">@brendanmarsh</a> — is an Agile Coach in the Infrastructure &amp; Operations tribe at Spotify. An Australian expat, Brendan now lives in Stockholm and coaches teams that build and maintain Spotify's big data infrastructure. Brendan has been coaching &amp; growing teams for the past 5 years.</p><p><strong>Kristian Lindwall</strong> — <a href=\"https://twitter.com/klindwall\">@klindwall</a> — is a Chapter Lead and Agile Coach at Spotify. Kristian has been coaching agile teams for the last 5 years, he is an experienced scrum master, agile coach and development manager.</p>",
                company: "Spotify",
                presentation: {
                    title: "How Agile Coaches help us win—the Agile Coach role at Spotify",
                    description: "At Spotify, we believe that we will win if we can iterate on our product faster than the competition. If we can build our product faster, we can learn faster and thus improve &amp; grow as a company faster than our competitors. We are growing rapidly to make this happen, but how do we ensure that our development teams are happy, high performing and constantly improving? How do we share these learnings with the rest of the business? One of the crucial roles in this endeavour are our Agile Coaches. In this talk, we will present what we believe an Agile Coach is, give some insight into the daily life of an Agile Coach at Spotify &amp; explain why we believe that Agile Coaches help us win.",
                    speakers: [
                        "Brendan Marsh",
                        "Kristian Lindwall"
                    ],
                    day: "Day 1 (Thursday)",
                    time: "12:20 - 13:00",
                }
            },
            {
                anchor: "OrenEllenbogen",
                name: "Oren Ellenbogen",
                photo: "themes/stretchcon/img/orenellenbogen.jpg",
                bio: "<p>Oren Ellenbogen is the curator of the successful newsletter SoftwareLeadWeekly and author of TeamLeadToolbox.</p><p>Oren is also an Engineer at Commerce Sciences (#2 employee), where he focuses on building the company's data infrastructure. Prior to Commerce Sciences, Oren served as Director of Engineering at Delver (acquired by Sears), where he was responsible for the development process, delivering kick-ass products and growing the next generation of Team Leads in his group.</p>",
                company: "Commerce Sciences, Software Lead Weekly",
                link: {
                    href: "http://twitter.com/orenellenbogen",
                    text: "@orenellenbogen"
                },
                presentation: {
                    title: "People don't quit their job, they quit their boss",
                    description: "Ever wondered if there is a way to systematically get better as a manager? What if you could apply concepts such as \"code reviews\" to your managerial decisions? Or--what can you do create happier work environment and better relationship with your teammates?<br/><br/>Managing people is hard, I know because I’m a practitioner, not a theorist. Learn from detailed insights, based on building, growing and mentoring teams and managers over the last 6 years. In this talk, you will learn 5 pragmatic and actionable ways to boost your management skills.",
                    day: "Day 1 (Thursday)",
                    time: "16:00 - 16:40",
                }
            },
            {
                anchor: "DarioNardi",
                name: "Dario Nardi",
                photo: "themes/stretchcon/img/darionardi.jpg",
                bio: "<p>Dario Nardi, PhD is a research fellow and teaching award winner at University of California, Los Angeles. He also heads Radiance House, a books, media, and training company. Dario does hands-on brain research, conducts workshops around the world, and has authored numerous books on personality for organizational development including \"Neuroscience of Personality: Brain-Savvy Insights for All Types of People\". His background includes programming and game design.</p>",
                company: "Radiance House, University of California",
                link: {
                    href: "http://twitter.com/DarioNardi22",
                    text: "@DarioNardi22"
                },
                presentation: {
                    title: "Getting our brains to sing together",
                    description: "How can we make the best use of individuals' talents? Practical knowledge of the brain helps us do that. In my lab, I study people's brain activity as they engage in various solo and group tasks. While we are all equipped with a similar toolkit, we each hone our favorites. Ideally, like a great orchestra, we use our favorites together in highly creative, productive, and friendly ways. As a trainer and a fellow business owner, I will share some key insights and brain-savvy suggestions for working together.",
                    day: "Day 1 (Thursday)",
                    time: "14:20 - 15:00",
                },
            },
            {
                anchor: "SarahNovotny",
                name: "Sarah Novotny",
                photo: "themes/stretchcon/img/sarahnovotny.jpg",
                bio: "<p>Sarah Novotny has recently resigned in order to pursue some personal projects.  She was most recently the CIO for Meteor Entertainment. Novotny has run large scale technology infrastructures as a Systems Engineer and a Database administrator for Amazon.com and the ill fated Ads.com.  In 2001, she founded Blue Gecko, a remote database administration company with two peers from Amazon. Blue Gecko, was sold to DatAvail in 2012. </p><p>Novotny regularly talks about technology infrastructure and geek lifestyle.  She is additionally a program chair for O'Reilly Media's OSCON.   Her technology writing and adventures as well as her more esoteric musings are found at <a href=\"http://sarahnovotny.com\">http://sarahnovotny.com</a>.</p>",
                company: "Meteor Entertainment",
                link: {
                    href: "http://twitter.com/sarahnovotny",
                    text: "@sarahnovotny"
                },
                presentation: {
                    title: "Offer hope to your staff: build a culture of learning",
                    description: "Frustration and disengagement cost businesses real money in lost productivity and turnover everyday.  In the technology industry, we know that skills we have today will be obsoleted in a year and entire new disciplines will exist in three years.   We also know that happy, growing, engaged staff are the best path to success.  Let's talk about how you as a leader encourage and foster an environment that rewards learning while meeting business needs.",
                    day: "Day 2 (Friday)",
                    time: "10:00 - 10:40",
                }
            },
            {
                anchor: "AlexanderGrosse",
                name: "Alexander Grosse",
                photo: "themes/stretchcon/img/alexandergrosse.jpg",
                bio: "<p>Alexander is currently VP Engineering at SoundCloud, the world’s leading social sound platform. Before SoundCloud he worked as R&amp;D director at Nokia, where he headed Places Development at Nokia’s Location Services and had overall responsibility for the Operations department. Alexander has worked in a wide range of positions (Development, Consulting, CTO) in the software industry since 1996, including co-founding two start-ups.He holds a Masters in computer science from the University of Oldenburg and an Executive MBA from FOM Berlin. Besides computer science Alexander works(ed) as a techno DJ in Berlin’s party scene.</p>",
                company: "SoundCloud",
                link: {
                    href: "http://twitter.com/klangberater",
                    text: "@klangberater"
                },
                presentation: {
                    title: "CANCELLED—Lessons learned from scaling SoundCloud",
                    description: "SoundCloud has grown from 40 to over 200 employees in a little more than 2 years while more than doubling the traffic to the site each year. How do you keep and develop a company culture while growing that fast? How do you make sure that you build the best teams? Additionally there is suddenly something called management. This talk will give an overview of the successes and failures experienced during that time.",
                    day: "Day 2 (Friday)",
                    time: "12:20 - 13:00"
                }
            },
            {
                anchor: "AnnemieRess",
                name: "Annemie Ress",
                photo: "themes/stretchcon/img/annemieress.jpg",
                bio: "<p>Annemie Ress is the Founder of PurpleBeach, which is a forum that encourages diversity of thinking and promotes the topic of people innovation. Accepting that innovation in business is underpinned by people, PurpleBeach acts as catalyst for change at the intersection between business and people.</p><p>Annemie has wide ranging experience in designing and implementing significant organizational change and transformation in multi-national businesses including: innovation and people and focusing on future trends as they specifically impact leadership, talent, culture, diversity and complexity.</p>",
                company: "Purple Beach",
                link: {
                    href: "",
                    text: ""
                },
                presentation: {
                    title: "PostCards from the Future: Tipis for overcoming barriers to innovation",
                    description: "In August 2013 PurpleBeach locked 10 people in a room for 10 hours. Their purpose was to identify 10 new, actionable insights to help organisations unlock and embed sustainable innovation in their day-to-day operations. The taskforce comprised a diverse group of innovators, business leaders, academics and authors. Each participant was an expert in the field of innovation, having worked in and led some of the world’s most dynamic and creative organisations.<br/><br/>The group was tasked with filtering, analysing and responding to opinion shared through The PurpleBeach Innovation Garden, an open-access research project that used social technologies to source insight into the barriers organisations face driving innovation and solutions for overcoming them. This new way of uncovering opinion through a collaborative approach is helping to change the way forward thinking businesses engage in discussions and is in itself a demonstration of innovation in action.<br/><br/>The session with Annemie will  detail 10 new actions that will help unlock innovation in any organisation, it points to three additional themes – fear, language and motivation – that have a major impact on the ability of organisations to unlock or sustainably embed a culture of innovation.",
                    day: "Day 2 (Friday)",
                    time: "11:40 - 12:20",
                }
            },
            {
                anchor: "SarivanPoelje",
                name: "Sari van Poelje",
                photo: "themes/stretchcon/img/sarivanpoelje.jpg",
                bio: "<p>Sari has 25 years experience of innovation on the interface of leadership and organizational development, executive coaching and transactional analysis both as a director within several multinationals and as an international consultant. Her specialties are organizational development, leadership development, performance management, and executive coaching.</p>",
                company: "Intact",
                link: {
                    href: "http://twitter.com/Intact1com",
                    text: "@Intact1com"
                },
                presentation: {
                    title: "Building great agile teams",
                    description: "The time of the great leader is over. In these turbulent times a great team is needed to lead a company to success. I will talk about the five conditions to build a team: purpose, interdependency, cooperation, anticipation and innovation.",
                    day: "Day 2 (Friday)",
                    time: "14:20 - 15:00"
                }
            },
            {
                anchor: "AndreasEhn",
                name: "Andreas Ehn",
                photo: "themes/stretchcon/img/andreasehn.jpg",
                bio: "<p>Andreas is Wrapp's co-founder and chief technology officer (CTO). Previously he was Spotify’s first employee and CTO, where he brought together the world-class tech team that designed and built the platform and product for the music service. Before that he worked for the Swedish online-gaming company Stardoll. Andreas is a board member and angel investor in several companies, and he is frequently hired as an advisor by promising Internet start-ups and venture capital funds.</p>",
                company: "Wrapp",
                link: {
                    href: "http://twitter.com/ehn",
                    text: "@ehn"
                },
                presentation: {
                    title: "The role of the manager in modern tech organizations",
                    description: "Traditionally decisions were made by managers and implemented by workers, but as more and more teams discover, that's not always the best way to get great results. As creativity becomes more important, systems more complex and a new generation of engineers demand more influence over their work, the benefits increase of pushing decision making to the people with the most domain knowledge rather than the generalist managers. But what, then, becomes the role of the manager, and how do you still work together towards a common goal and keep all the departments in a company on the same page?",
                    day: "Day 2 (Friday)",
                    time: "10:40 - 11:20",
                }
            },
            {
                anchor: "DenesKemeny",
                name: "Dénes Kemény",
                photo: "themes/stretchcon/img/kemenydenes.jpg",
                bio: "<p>Dénes Kemény is a former Hungarian water polo player who was the trainer and president of the Hungarian National Men Water Polo Team from 1997 to 2012. During his reign the Hungarian team won three Olympic golds in a row between 2000 and 2008. He was granted Hungarian Sport President of the Year award five times. He's the author of the book \"Kemény üzenetek\" where he shares his thoughts on team building and leadership.</p>",
                company: "former president of the Hungarian National Men Water Polo Team",
                presentation: {
                    title: "CANCELLED—The Kemény method",
                    description: "",
                    day: "Day 2 (Friday)",
                    time: "15:50 - 16:30"
                }
            },
            {
                anchor: "EPAM",
                name: "Attila Bozsó, Balázs Fejes",
                photo: "themes/stretchcon/img/balazsfejes.jpg",
                bio: "<p><strong>Attila Bozso</strong> is the Director of Hungarian Operations at EPAM Systems. He is managing the Hungarian entity and was one of the key driver to  build EPAM Hungary from 160 small company to over an 1000+ people operation as of today. His current focus is how to scale the growth further and how to introduce and roll out new or best practices to 10,000 organization spread over several countries and different cultures.</p><p><strong>Balazs Fejes</strong> (FB2) is the Director of Product Management at EPAM Systems, leading internal product development efforts at EPAM as well as advising a wide range of international clients on project planning, product design, and development processes. His current focus is on building xPMC, EPAM’s next-gen software development lifecycle management toolchain.</p><p>EPAM is the #1 software services and solutions provider from Central and Eastern Europe, listed on the NYSE since 2012. It has been named #2 on the list of America’s Best Small Companies: 20 Fast-Growing Tech Stars released by Forbes on October 9, 2013.</p><p>You might also know Balazs from his podcasts, recorded in his home studio, where he's producing some of the most popular online radio shows in Hungary, including the technology-focused interview show 01beszélgetések, the literary podcast Hármas Könyvelés, and Konnektor, the weekly gaming podcast.</p>",
                company: "EPAM Systems",
                presentation: {
                    title: "The EPAM way managing from 0 to the Dow Jones",
                    description: "Attila and Balazs will share their experiences about growing EPAM’s Hungarian presence from zero to almost a thousand employees, and the key challenges along the way, focusing on regional particularities, working from the local talent pool. How do you kickstart a startup and recruit key talent before you have a business? How do you transition rockstar developers into leadership roles? How do you build out middle management in an international organization? Scaling, growing, stretching everybody’s comfort zone along the way.",
                    day: "Day 2 (Friday)",
                    time: "15:00 - 15:40",
                    speakers: [
                        "Balázs Fejes",
                        "Attila Bozsó"
                    ]
                }
            },
            {
                anchor: "FrancoisMazoudier",
                name: "Francois Mazoudier",
                photo: "themes/stretchcon/img/francoismazoudier.jpg",
                bio: "<p>Francois Mazoudier is the co-founder and Managing Partner of Tech Leaders Capital, a tech CEO co-investment club. He has 20 years+ experience in TMT (Technology, Media and Telecom), early stage Venture Capital and M&amp;A.</p><p>He spent half of his career in operational roles (from product management to customer services to sales and marketing) then senior management functions, all within TMT firms. Examples include Central Point Software (sold to Symantec - Product Marketing), RealNetworks (IPO – Head of Marketing, founding team, from startup to IPO), The Cloud (WiFi operator network, sold to SKY CORP - Marketing Head) and PictureTel (Videoconferencing, Channel Marketing, Business Development - IPO, now Polycom).</p><p>He spent the second part of his career in Private Equity. He was the co-founder of Speed Ventures, a $100m pan-European seed stage Venture Capital firm backed by Soros Partners and Permira (sold in 2001), then helped VC funds with the operational turnaround of underperforming investments before setting up EQUATE, a specialist boutique advisory firm helping TMT firms through growth, funding and strategic transactions. Francois also remains a Venture Partner for LD&amp;A, a pan-European tech M&amp;A advisory and corporate finance firm.</p><p>Francois is an active advisor, board mentor and early stage investor.</p><p>Francois speaks French, English, German and some Spanish and has lived in even more countries; he holds a BA in Sales &amp; Marketing from the University of Paris. He loves tennis, travel, epicurean pleasures and constant change. He hates stagnation, London’s weather, his total lack of work-life balance and pomp.</p>",
                company: "EQUATE, LD&A",
                link: {
                    href: "http://twitter.com/franco1s",
                    text: "@franco1s"
                },
                presentation: {
                    title: "Does your team fit? From Idea to International Success, practical tips and lessons learnt",
                    description: "Getting a business off the ground and lead it to a successful take-off is tough. Real tough. The late nights, the cheap food, the ever changing business models and the many disappointments. Yet one of the most valuable, and rewarding, parts of being the CEO is the construction of the team. I’ve built some companies, some from the very inception all the way to an IPO, and some straight into the proverbial wall. I will share some of the stories I’ve come across, some academic models I’ve come to develop and some real life examples.",
                    day: "Day 1 (Thursday)",
                    time: "11:40 - 12:20",
                }
            }*/
        ],

        eventorganizers: [
            {
                name: "Medea Baccifava, event organizer",
                photo: "themes/stretchcon/img/medeabaccifava.jpg",
                bio: "I am an innovative professional working in advisory and international marketing positions in Europe and Asia. In current position at Prezi, I deliver small- and large-scale projects, from optimization to communication, handling international events like mloc.js, RAMP and Stretch.",
                company: "Prezi",
                link: {
                    href: "http://twitter.com/Medea_Baccifava",
                    text: "@Medea_Baccifava"
                },
            },
            {
                name: "Jozsef Czapovics, program chair, chief organizer",
                photo: "themes/stretchcon/img/jozsefczapovics.jpg",
                          bio: "I'm engineering director at Prezi. I believe in a bright future and our ability to build it together. I love to think about how to scale agile and what it means being a supportive manager. If you believe in a world where people go home everyday feeling happy with their work, we have already something in common.",
                company: "Prezi",
                link: {
                    href: "http://twitter.com/czapinho",
                    text: "@czapinho"
                },
            },
                          {
                          name: "Péter Halácsy, program committee",
                          photo: "themes/stretchcon/img/peterhalacsy.jpg",
                          bio: "I'm CTO and founder of Prezi, a fast growing startup changing how people share ideas.  I build the organization, stretch engineers, and code in Haskell for a better life. I care about entrepreneurship in Europe especially in Hungary. I believe that Budapest is going to be a one of the best places for high-tech startup.",
                          company: "Prezi",
                          link: {
                          href: "http://twitter.com/halacsy",
                          text: "@halacsy"
                          },
                          },
            {
                name: "Gergely Hodicska, program committee",
                photo: "themes/stretchcon/img/gergelyhodicska.jpg",
                bio: "I am VP of Engineering at Ustream and I oversee all the engineering teams. Early on, I specialized in building and operating large scale web applications, including the design and development of several Alexa Top 100 sites. Nowadays I focus on improving the way we develop at Ustream, creating effective processes and building a culture where our engineers can not just continuously deliver but also continuously improve. I strongly believe in teamwork, devops and lifelong learning.",
                company: "Ustream",
                link: {
                    href: "http://twitter.com/felhobacsi",
                    text: "@felhobacsi"
                },
            },
            {
                name: "Laszlo Csereklei, program committee",
                photo: "themes/stretchcon/img/laszlocsereklei.jpg",
                bio: "I am product development leader at Ericsson responsible for specialized development teams. I am passionate about the Lean, Agile and Craftsmanship movement, doing coaching, mentoring, and teaching from individual to organizational levels.",
                company: "Ericsson",
                link: {
                href: "http://twitter.com/LCsereklei",
                text: "@LCsereklei"
                },
            },
            {
                name: "Balint Koves, program committee",
                photo: "themes/stretchcon/img/balintkoves.jpg",
                bio: "I strongly believe in the constant possibility of improvement and that the only route to this is stretching one's boundaries, instead of following the paved way. My role currently at Ericsson is building, coaching, mentoring and generally enabling a new organization of several teams in the integration area.",
                company: "Ericsson",
                /*link: {
                href: "http://twitter.com/LCsereklei",
                text: "@LCsereklei"
                  },*/
            },
        ],

        // List of Sponsors
        sponsors: [
            {
                name: "Your Company",
                logo: "themes/stretchcon/img/your-logo.jpg",
                //url: "http://www.logmein.com/"
            },
            /*{
                name: "UPC",
                logo: "themes/stretchcon/img/upcbusiness.jpg",
                url: "http://www.upc.hu/"
            },
            {
                name: "avec accelerator",
                logo: "themes/stretchcon/img/avec.png",
                url: "http://avecincubator.com/"
            },
            {
                name: "Kürt Akadémia",
                logo: "themes/stretchcon/img/kurtakademia.png",
                url: "http://www.kurt-akademia.hu/"
            }*/
        ],

        // List of Partners
        partners: [
                 
            {
                //name: "Your Company",
                logo: "themes/stretchcon/img/your-logo.jpg",
                //url: "http://infoq.com"
            },
            /*{
                name: "Software Lead Weekly",
                logo: "themes/stretchcon/img/softwareleadweekly.jpg",
                url: "http://softwareleadweekly.com/"
            },
            {
                name: "ComputerWorld Számítástechnika",
                logo: "themes/stretchcon/img/computerworld.jpg",
                url: "http://computerworld.hu/"
            },
            {
                name: "popforms",
                logo: "themes/stretchcon/img/popforms_logo.png",
                url: "https://popforms.com/"
            },
            {
                name: "O'Reilly",
                logo: "themes/stretchcon/img/oreilly.jpg",
                url: "http://www.oreilly.com/"
            },
            {
                name: "Napi.hu",
                logo: "themes/stretchcon/img/napihu.jpg",
                url: "http://www.napi.hu/"
            },
            {
                name: "Budapest Business Jourbnal",
                logo: "themes/stretchcon/img/bbj_logo.jpg",
                url: "http://www.bbj.hu/"
            },
            {
                name: "Figyelő",
                logo: "themes/stretchcon/img/figyelo.jpg",
                url: "http://figyelo.hu/"
            },
            {
                name: "HWSW",
                logo: "themes/stretchcon/img/hwsw.jpg",
                url: "http://www.hwsw.hu/"
            },
            {
                name: "VS",
                logo: "themes/stretchcon/img/vslogo.png",
                url: "http://vs.hu/"
            },
            {
                name: "Haszon",
                logo: "themes/stretchcon/img/haszon.png",
                url: "http://www.haszon.hu/"
            },
            {
                name: "Üzlet & Pszichológia",
                logo: "themes/stretchcon/img/upszi.png",
                url: "http://www.upszi.hu/"
            }*/
        ],

        // List of Organizers
        organizers: [
            {
                name: "Prezi",
                logo: "themes/stretchcon/img/prezi.jpg",
                url: "http://prezi.com"
            },
            {
                name: "USTREAM",
                logo: "themes/stretchcon/img/ustream.jpg",
                url: "http://ustream.com/"
            },
            {
                name: "ERICKSON",
                logo: "themes/stretchcon/img/ericsson.jpg",
                url: "http://ericsson.hu/"
            }
        ],

        // Theme path
        getTheme: function() {
            return "themes/" + this.site.theme;
        }
    }
};
