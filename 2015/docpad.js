module.exports = {
    prompts: false,
    outPath: "www/",
    // These are variables will be accessible via our templates
    templateData: {
        // Conference info
        conf: {
            name: "Building Effective, Adaptable, Resilient and Purposeful Organizations. December 9-11, 2015",
            tagline: "Leadership and management conference",
            description: "Stretch is a leadership and management conference to learn from the best and stretch yourself. Join us in Budapest, Hungary this December and get inspired by stories from leaders in great organizations as they talk about the challenges of leadership coming from within the team.",
            date: "December 9-11, 2015 - Budapest",
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
            'cfp',
            // 'schedule',
            'speakers',
            // 'location',
            // 'tickets',
            // 'sponsors',
            'organizers',
            'contact'
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
            {
                name: "Gergely Orbán, program committee",
                photo: "themes/stretchcon/img/org_gergelyorban.png",
                bio: "",
                company: "DoctuSoft",
            },
            {
                name: "Ádám Bankó, program committee",
                photo: "themes/stretchcon/img/org_adambanko.png",
                bio: "I am an Organization Developer at <a href=\"http://www.lab.coop/\">Lab.Coop</a>, evolving Holacracy, NonViolent Communication and transparent salaries at this employee owned product house. I love living on the cutting edge and experimenting with ways of reinventing organizations.",
                company: "Lab.Coop",
            },
        ],
        // List of Sponsors
        sponsors: [
            {
                name: "Name",
                logo: "themes/stretchcon/img/sponsors_xxx.png",
                url: "http://url"
            },
        ],
        // List of Partners
        partners: [
            {
                name: "Name",
                logo: "themes/stretchcon/img/partners_xxx.jpg",
                url: "http://url"
            },
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
                name: "ERICKSON",
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