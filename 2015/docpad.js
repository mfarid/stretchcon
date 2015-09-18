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
            // 'speakers',
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
            {
                header: "Day 1 (Thursday)",
                slots: [
                    {
                        time: "08:00 - 09:00",
                        title: "Registration & Breakfast"
                    },
                    {
                        time: "09:00 - 09:20",
                        title: "Introduction",
                        recordedUrl: "http://www.ustream.tv/recorded/xxx",
                        speaker: true
                    },
                    {
                        time: "09:20 - 10:20",
                        title: "Keynote",
                        keynote: true,
                        speaker: true,
                        recordedUrl: "http://www.ustream.tv/recorded/xxx"
                    },
                ]
            },
            {
                header: "Day 2 (Friday)",
                slots: [
                ]
            }
        ],
        // Speakers and talks
        speakers: [
            {
                anchor: "JohnDoe",
                name: "John Doe",
                photo: "themes/stretchcon/img/speakers_johndoe.png",
                bio: "<p></p>",
                company: "FizzBuzz Ltd.",
                link: {
                    href: "http://twitter.com/JohnDoe",
                    text: "@JohnDoe"
                },
                presentation: {
                    title: "Title",
                    description: "Description",
                    day: "Day 1 (Thursday)",
                    time: "09:20 - 10:20",
               }
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