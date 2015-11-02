module.exports = {
    prompts: false,
    outPath: "www/",
    // These are variables will be accessible via our templates
    templateData: {
        // Conference info
        conf: {
            name: "Leadership and Management Conference",
            tagline: "Building Effective, Adaptable, Resilient and Purposeful Organizations",
            description: "Stretch is a conference to learn from the best and stretch yourself. Join us in Budapest, Hungary this December and get inspired by stories from leaders in great organizations as they talk about the challenges of leadership coming from within the team.",
            date: "Budapest, December 9-11, 2015",
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
            url: "http://stretchcon.com/2015/",
            googleanalytics: "UA-43412556-1"
        },
        // Active sections on the website
        // to deactivate comment out with '//'
        // you can also change order here and it will reflect on page
        sections: [
            // 'summary',
            // 'photos',
            'about',
            // 'cfp',
            // 'schedule',
            'speakers',
            'location',
            'sponsors',
            'organizers',
            'codeofconduct',
            'contact',
            // 'tickets'
        ],
        // Labels which you can translate to other languages
        labels: {
            about: "About",
            cfp: "Call For Presentations",
            location: "Location",
            speakers: "Speakers",
            schedule: "Schedule",
            tickets: "Tickets",
            sponsors: "Sponsors",
            organizers: "Organizers",
            codeofconduct: "Code of Conduct",
            contact: "Contact"
        },
        schedule: [
            // {
            //     header: "Day 1 (Thursday)",
            //     slots: [
            //         {
            //             time: "08:00 - 09:00",
            //             title: "Registration & Breakfast"
            //         },
            //         {
            //             time: "09:00 - 09:20",
            //             title: "Introduction",
            //             recordedUrl: "http://www.ustream.tv/recorded/xxx",
            //             speaker: true
            //         },
            //         {
            //             time: "09:20 - 10:20",
            //             title: "Keynote",
            //             keynote: true,
            //             speaker: true,
            //             recordedUrl: "http://www.ustream.tv/recorded/xxx"
            //         },
            //     ]
            // },
            // {
            //     header: "Day 2 (Friday)",
            //     slots: [
            //     ]
            // }
        ],
        // Speakers and talks
        speakers: [
            {
                anchor: "JamesClear",
                name: "James Clear",
                photo: "themes/stretchcon/img/speaker_jamesclear.jpg",
                bio: "<p>James Clear writes about behavioral psychology, habit formation, and performance improvement at JamesClear.com. Over 200,000 people subscribe to his weekly email newsletter. His work has been covered in TIME, Entrepreneur Magazine, Forbes, USA TODAY, and many other outlets. He has delivered keynote presentations on how to build better habits at elite organizations like Stanford University and Google. You can learn more about his work and browse his popular online seminars about building better habits at <a href=\"http://jamesclear.com/\">JamesClear.com</a>.</p>",
                company: "James Clear Holdings",
                link: {
                    href: "http://twitter.com/james_clear",
                    text: "@james_clear"
                },
               //  presentation: {
               //      title: "Title",
               //      description: "Description",
               //      day: "Day 1 (Thursday)",
               //      time: "09:20 - 10:20",
               // }
            },
            {
                anchor: "NiklasModig",
                name: "Niklas Modig",
                photo: "themes/stretchcon/img/speaker_niklasmodig.jpg",
                bio: "<p>Niklas Modig is a researcher at the Center for Innovation and Operations Management at Stockholm School of Economics and is one of the leading authorities within lean and operational excellence in Scandinavia. He has been living for extended periods in Japan and reads, writes, and speaks Japanese fluently. From 2006 to 2008, Niklas was a visiting researcher at the “Center of Excellence – Manufacturing Management Research Center” at University of Tokyo where he researched together with professor Takahiro Fujimoto who is one of the leading Toyota researcher of all time. Between 2006-2008 Niklas was given access to conduct a in-depth study of Toyota Motor Corporation’s most high-performing service systems Japan. He has spent thousands of hours inside Toyota trying to understand the depth of their philosophy.<br><br>Niklas also works as a supervisor and strategic facilitator for various multi-national companies but also for hospitals, public organizations, management consulting firms, private equity firms, venture capital firms, etc from all over the world. He has taken a leading position as inspirational lecturer within the field of lean and operational excellence.<br><br>Niklas is the author of the best-selling book “This Is Lean - Resolving the Efficiency Paradox” which has sold over 170 000 copies and became the Nr.1 best-selling management book in Sweden 2012 and one of the most sold lean books of all time in Sweden. The book has been launched in more than 10 languages. In 2012 Niklas was selected as one out of 101 Super-talents in Sweden by the weekly business publication Veckans Affärer.</p>",
                company: "Author of This Is Lean - Resolving the Efficiency Paradox",
                link: {
                    href: "http://twitter.com/LeanOnMyself",
                    text: "@LeanOnMyself"
                },
               //  presentation: {
               //      title: "Title",
               //      description: "Description",
               //      day: "Day 1 (Thursday)",
               //      time: "09:20 - 10:20",
               // }
            },
            {
                anchor: "BrianRobertson",
                name: "Brian Robertson",
                photo: "themes/stretchcon/img/speaker_brianrobertson.jpg",
                bio: "<p>Brian Robertson is a seasoned entrepreneur and organization builder, and a recovering CEO – a job he now helps free others from with Holacracy. Generally regarded as the primary developer of the system, Brian’s work allows leaders to release the reins of personal power and persuasion into a trustworthy and explicit governance process. Brian also serves as the drafter and steward of the Holacracy Constitution, which captures the system’s unique “rules of the game” in concrete form. Beyond joyfully crafting legal documents, Brian’s creative expression takes many forms – he co-founded HolacracyOne to support Holacracy’s growth, and he fills and loves a broad variety of the company’s roles. He’s particularly grateful to hold no fancy titles and wield no special powers, so he can show up as just another partner doing his part to support something he cares about.<br><br>Brian is the author of the book <a href=\"http://holacracybook.com/\">Holacracy: The New Management System for a Rapidly Changing World.</a></p>",
                company: "HolacracyOne",
                link: {
                    href: "http://twitter.com/h1brian",
                    text: "@h1brian"
                },
               //  presentation: {
               //      title: "Title",
               //      description: "Description",
               //      day: "Day 1 (Thursday)",
               //      time: "09:20 - 10:20",
               // }
            },
            {
                anchor: "DocNorton",
                name: "Doc Norton",
                photo: "themes/stretchcon/img/speaker_docnorton.jpg",
                bio: "<p>Michael Norton (Doc) is a software delivery professional working to make the world of software development a better place. His experience covers a wide range of development topics. Doc declares expertise in no single language or methodology and is immediately suspicious of anyone who declares such expertise. A frequent speaker, Doc is passionate about helping others become better developers, working with teams to improve delivery, and building great organisations.</p>",
                company: "CTO2",
                link: {
                    href: "http://twitter.com/DocOnDev",
                    text: "@DocOnDev"
                },
               //  presentation: {
               //      title: "Title",
               //      description: "Description",
               //      day: "Day 1 (Thursday)",
               //      time: "09:20 - 10:20",
               // }
            },
            {
                anchor: "JohnBunch",
                name: "John Bunch",
                photo: "themes/stretchcon/img/speaker_johnbunch.jpg",
                bio: "<p>John Bunch was born and raised in Tallahassee, FL.  He completed his undergraduate studies at Georgia Institute of Technology with a B.S. in Computer Science and later received an M.S. In Computer Science from UNLV.  After trying out High School math teaching and professional poker playing John joined Zappos.com in 2009 as a Software Developer.  He moved on to lead the Public API team and subsequently transitioned into the role of Technical Advisor to Zappos CEO, Tony Hsieh.  John is currently leading Holacracy implementation efforts at Zappos which look to transform traditional hierarchies towards self-organization, empowerment, and innovation.</p>",
                company: "Zappos",
                link: {
                    href: "http://twitter.com/BunchBunchBunch",
                    text: "@BunchBunchBunch"
                },
               //  presentation: {
               //      title: "Title",
               //      description: "Description",
               //      day: "Day 1 (Thursday)",
               //      time: "09:20 - 10:20",
               // }
            },
            {
                anchor: "EvaRambala",
                name: "Éva Rambala",
                photo: "themes/stretchcon/img/speaker_evarambala.jpg",
                bio: "<p>Since 1996, I have studied with Marshall Rosenberg who developed Nonviolent Communication(NVC). Since 2000, I have been training NVC as an authorized trainer of the Center for Nonviolent Communication (CNVC), and I serve as Coordinator for the Central and Eastern European Centers for Nonviolent Communication. This role involves finding people across the region, helping them build local NVC teams, and training people to be trainers. For five years I was working closely with Marshall Rosenberg. My work takes me all over the world, bringing me a huge range of experiences working with people from diverse cultures. I have had the privilege to work in Asia, South America, the USA, Canada, many of the ex-Soviet countries, and several countries in Western Europe. I have worked in Argentina, Bosnia and Herzegovina, Brazil, Canada, Croatia, Czech Republic, Denmark, England, Estonia, Georgia, Hungary, India, Mexico, Moldova, Netherlands, Norway, Poland, Puerto Rico, Romania, Russia, Slovakia, South Korea, Sri Lanka, Scotland, Sweden, Switzerland, Turkey, Ukraine, USA.</p>",
                company: "International Center for Nonviolent Communication",
                link: {
                    href: "http://www.rambala.hu/en/",
                    text: "rambala.hu"
                },
               //  presentation: {
               //      title: "Title",
               //      description: "Description",
               //      day: "Day 1 (Thursday)",
               //      time: "09:20 - 10:20",
               // }
            },
            {
                anchor: "JosephPelrine",
                name: "Joseph Pelrine",
                photo: "themes/stretchcon/img/speaker_josephpelrine.png",
                bio: "<p>As Kent Beck’s assistant, Joseph Pelrine was one of the first in the world who worked with eXtreme Programming. As Europe’s first certified ScrumMaster and Trainer, he was largely responsible for introducing Scrum to the german-speaking part of Europe. For almost 20 years, Joseph Pelrine has been helping some of the world’s most important companies improve their software development process and successfully transition to Agile. A noted international speaker, he conducts research in the field of social complexity theory and its application to Agile processes, and is currently pursuing a PhD in psychology and linguistics.</p>",
                company: "Megadon AG",
                link: {
                    href: "http://twitter.com/josephpelrine",
                    text: "@josephpelrine"
                },
               //  presentation: {
               //      title: "Title",
               //      description: "Description",
               //      day: "Day 1 (Thursday)",
               //      time: "09:20 - 10:20",
               // }
            },
            {
                anchor: "AnneLoehr",
                name: "Anne Loehr",
                photo: "themes/stretchcon/img/speaker_anneloehr.png",
                bio: "<p>Named the “Generational Guru” by The Washington Post, Anne Loehr’s insights into effectively leveraging the four generations gives her clients a leading edge. Working with diverse organizations such as Facebook, Morgan Stanley Smith Barney, US Air Force, Merrill Lynch, American Red Cross, MD Anderson Cancer Center, Coca-Cola, Booz Allen Hamilton, and Graphic Packaging International, she consistently helps managers improve their generational communication skills.<br><br>Anne’s work has been featured in Newsweek International, The Washington Post, The New York Times, Huffington Post, National Geographic Traveler, Elle and CNN Money. A member of the prestigious National Speakers Association, Anne speaks regularly at national conferences and on the radio. She is also a faculty member of the American Management Association.<br><br>American Management Association published Anne’s acclaimed book, A Manager’s Guide to Coaching: Simple and Effective Ways to Get the Best from Your Employees. Career Press published her newest book, Managing the Unmanageable: How to Motivate Even the Most Unruly Employee.</p>",
                company: "Anne Loehr & Associates",
                link: {
                    href: "http://twitter.com/anneloehr",
                    text: "@anneloehr"
                },
               //  presentation: {
               //      title: "Title",
               //      description: "Description",
               //      day: "Day 1 (Thursday)",
               //      time: "09:20 - 10:20",
               // }
            },
            {
                anchor: "JohnBlakey",
                name: "John Blakey",
                photo: "themes/stretchcon/img/speaker_johnblakey.jpg",
                bio: "<p>John is one of the UK’s leading executive coaches and board advisors having worked with CEOs around the globe, as well as with Olympic medallists and Team GB / England sports coaches in rowing, cricket and target shooting. In his business career, John has been a Fast Track 100 entrepreneur, FTSE100 International Managing Director and Chair/Director of a number of voluntary organisations, working collaboratively in diverse teams to deliver outstanding results. He is an experienced international speaker and co-author with Ian Day of the best-selling leadership coaching book 'Challenging Coaching' which has been featured in the Sunday Times, the Guardian and the Financial Times.</p>",
                company: "Author – Challenging Coaching",
                link: {
                    href: "http://challengingcoaching.co.uk",
                    text: "challengingcoaching.co.uk"
                },
               //  presentation: {
               //      title: "Title",
               //      description: "Description",
               //      day: "Day 1 (Thursday)",
               //      time: "09:20 - 10:20",
               // }
            },
            {
                anchor: "WiboKoole",
                name: "Wibo Koole",
                photo: "themes/stretchcon/img/speaker_wibokoole.jpg",
                bio: "<p>Wibo Koole is director of the <a href=\"http://centrumvoormindfulness.nl/en/\">Centre for Mindfulness</a> in Amsterdam (the Netherlands) and founder of its widely acknowledged leadership program Resilience in management, mindfulness-based leadership in 10 weeks. He is a public speaker on leadership, mindfulness and organizational development and the author of the bestselling Mindful Leadership. Tools to help you focus and succeed that provides the first comprehensive framework for mindfulness-based leadership and teamwork. Other books include Mindful Leiderschap voor effectieve teams en organisaties (in Dutch) and Mindful Werken. In 8 stappen je werkdruk de baas (Dutch).<br><br>The Centre for Mindfulness is a professional, innovative and open training and knowledge centre for mindfulness in the Netherlands and Europe. Its mission is contribute to the enhancement of the quality of life and work, education and health by integrating mindfulness in all parts of society.<br><br>Besides teaching mindfulness based leadership programs Wibo works as a management consultant and leadership expert for innovation in complex systems. His work focuses on strategy and innovation, change management and leadership development in a wide range of organizations, both corporate and social. His clients range from KLM to local governments like the City of Amsterdam, from the Ministry of Agriculture in Ethiopia to international ngo's like Oxfam and Synergos.</p>",
                company: "Centre for Mindfulness",
                link: {
                    href: "http://twitter.com/WiboKoole",
                    text: "@WiboKoole"
                },
               //  presentation: {
               //      title: "Title",
               //      description: "Description",
               //      day: "Day 1 (Thursday)",
               //      time: "09:20 - 10:20",
               // }
            },
            {
                anchor: "ChristianHausner",
                name: "Christian Hausner",
                photo: "themes/stretchcon/img/speaker_christianhausner.png",
                bio: "<p>Christian Hausner is history teacher and personal assistant to Margret Rasfeld, school director of one of the most famous German schools these days, the Evangelische Schule Berlin Zentrum. His main focus of work is citizen’s empowerment and education as well as innovation in schools. Christian Hausner studied Politics, History and Philosophy in Berlin, Bath, Prague and Eskisehir (TR) & visited the HPI School of Design Thinking in Potsdam.</p>",
                company: "ESBZ",
                link: {
                    href: "http://www.ev-schule-zentrum.de/aktuell/",
                    text: "ESBZ"
                },
               //  presentation: {
               //      title: "Title",
               //      description: "Description",
               //      day: "Day 1 (Thursday)",
               //      time: "09:20 - 10:20",
               // }
            },
            {
                anchor: "BeataKalamar",
                name: "Beata Kalamar",
                photo: "themes/stretchcon/img/speaker_beatakalamar.png",
                bio: "<p>Beáta is an Executive Coach and Leadership Developer. She provides unique, personalized and invaluable support to leaders on how to tackle wide scale of complex challenges and uncertainties of today’s global business market.  She has more than 13 years of experience in individual and team coaching in multinational organisations. She has coached senior executives, leadership team members, directors, high potential senior managers and managers, and worked with various teams with some of the most prestigious organisations in a variety of businesses in Hungary & Central-Eastern Europe. She has worked for PwC as an internal executive coach and trainer for 10 years. She was also the former president of International Coach Federation Hungarian Chapter, and lead a non-profit organisation of 120 members.</p>",
                company: "Executive Coach, Leadership Developer",
                link: {
                    href: "http://beatakalamar.com/",
                    text: "beatakalamar.com"
                },
               //  presentation: {
               //      title: "Title",
               //      description: "Description",
               //      day: "Day 1 (Thursday)",
               //      time: "09:20 - 10:20",
               // }
            },
            {
                anchor: "AdamBanko",
                name: "Ádám Bankó",
                photo: "themes/stretchcon/img/speaker_adambanko.png",
                bio: "<p>Adam works on scaling organizations and code. He worked as a developer at Prezi while it has grown from 30 to 200 people. This experience fueled his interest in organization development. Now he guides Lab.Coop on the way to a scalable agile organization.</p>",
                company: "LAB.COOP",
                link: {
                    href: "https://twitter.com/adam_banko",
                    text: "@adam_banko"
                },
               //  presentation: {
               //      title: "Title",
               //      description: "Description",
               //      day: "Day 1 (Thursday)",
               //      time: "09:20 - 10:20",
               // }
            },
            {
                anchor: "GergelyOrban",
                name: "Gergely Orbán",
                photo: "themes/stretchcon/img/speaker_gergelyorban.png",
                bio: "<p>Gergely is leading organizational change and manage IT projects at Doctusoft. Coach teams and individuals and live the story they share while they go together for the project objectives. His recent focus is on: Self management and self governing teams, Teal organizational practices (Frederic Laloux), Holacracy, Mindfulness in work.</p>",
                company: "DOCTUSOFT",
                // link: {
                  //  href: "https://twitter.com/adam_banko",
                  //  text: "@adam_banko"
              //  },
               //  presentation: {
               //      title: "Title",
               //      description: "Description",
               //      day: "Day 1 (Thursday)",
               //      time: "09:20 - 10:20",
               // }
            },
            {
                anchor: "TimSteigert",
                name: "Tim Steigert",
                photo: "themes/stretchcon/img/speaker_timsteigert.jpg",
                bio: "<p>Tim is leading Digital & Innovation Strategy for GE, driving large scale changes in Europe. Due to a strong background in technology he prefers working with people. He is passionate about education, healthcare & energy. Being a very visual person his professional interests are in strategy, innovation and psychology. He is constantly being trained by kids and enjoys being a jester, keynote speaker and coach in his spare time.</p>",
                company: "GE",
                link: {
                    href: "https://twitter.com/t_1_m",
                    text: "@t_1_m"
                },
               //  presentation: {
               //      title: "Title",
               //      description: "Description",
               //      day: "Day 1 (Thursday)",
               //      time: "09:20 - 10:20",
               // }
            },
        ],
        eventorganizers: [
            {
                name: "Bernadett Otterbein, event organizer",
                photo: "themes/stretchcon/img/org_bernadettotterbein.png",
                bio: "",
                company: "Ustream",
            },
            {
                name: "Medea Baccifava, event organizer",
                photo: "themes/stretchcon/img/org_medeabaccifava.jpg",
                bio: "I am an innovative professional working in advisory and international marketing positions in Europe and Asia. In current position at Prezi, I deliver small- and large-scale projects, from optimization to communication, handling international events like mloc.js, RAMP and Stretch.",
                company: "Prezi",
                link: {
                    href: "http://twitter.com/Medea_Baccifava",
                    text: "@Medea_Baccifava"
                },
            },
            {
                name: "Balint Koves, program committee, chief organizer",
                photo: "themes/stretchcon/img/org_balintkoves.jpg",
                bio: "I strongly believe in the constant possibility of improvement and that the only route to this is stretching one's boundaries, instead of following the paved way. My role currently at Ericsson is building, coaching, mentoring and generally enabling a new organization of several teams in the integration area.",
                company: "Ericsson",
            },
            {
                name: "Gergely Hodicska, program committee, event organizer",
                photo: "themes/stretchcon/img/org_gergelyhodicska.jpg",
                bio: "I am the VP of Engineering at Ustream and I oversee all the engineering teams. Early on, I specialized in building and operating large scale web applications, including the design and development of several Alexa Top 100 sites. Nowadays I focus on improving the way we develop at Ustream, creating effective processes and building a culture where our engineers can not just continuously deliver but also continuously improve. I strongly believe in teamwork, removing silos, continuous experimentation and lifelong learning.",
                company: "Ustream",
                link: {
                    href: "http://twitter.com/felhobacsi",
                    text: "@felhobacsi"
                },
            },
            {
                name: "Attila Balogi, event organizer",
                photo: "themes/stretchcon/img/org_attilabalogi.jpg",
                bio: "Co-Organizing international tech conferences in Budapest with 300-1000 participants. Project management of the events, Design and execute global communication campaigns for Stretch, Mloc.JS, Craft, Redefine ​Conferences.",
                company: "Prezi",
            },
            {
                name: "Laszlo Csereklei, program committee, event organizer",
                photo: "themes/stretchcon/img/org_laszlocsereklei.jpg",
                bio: "I am product development leader at Ericsson responsible for specialized development teams. I am passionate about the Lean, Agile and Craftsmanship movement, doing coaching, mentoring, and teaching from individual to organizational levels.",
                company: "Ericsson",
                link: {
                    href: "http://twitter.com/LCsereklei",
                    text: "@LCsereklei"
                },
            },
        ],
        // List of Sponsors
        sponsors: [
            // {
            //     name: "Name",
            //     logo: "themes/stretchcon/img/sponsors_xxx.png",
            //     url: "http://url"
            // },
        ],
        // List of Partners
        partners: [
            // {
            //     name: "Name",
            //     logo: "themes/stretchcon/img/partners_xxx.jpg",
            //     url: "http://url"
            // },
        ],
        // List of Organizers
        organizers: [
            {
                name: "Prezi",
                logo: "themes/stretchcon/img/org_prezi.jpg",
                url: "http://prezi.com"
            },
            {
                name: "USTREAM",
                logo: "themes/stretchcon/img/org_ustream.jpg",
                url: "http://ustream.tv/"
            },
            {
                name: "ERICSSON",
                logo: "themes/stretchcon/img/org_ericsson.jpg",
                url: "http://ericsson.hu/"
            }
        ],
        // Theme path
        getTheme: function() {
            return "themes/" + this.site.theme;
        }
    }
};
