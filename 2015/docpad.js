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
            'schedule',
            'speakers',
            'workshops',
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
            workshops: "Workshops",
            schedule: "Schedule",
            tickets: "Tickets",
            sponsors: "Sponsors",
            organizers: "Organizers",
            codeofconduct: "Code of Conduct",
            contact: "Contact"
        },
        schedule: [
            {
                header: "Day 1 (Wednesday)",
                slots: [
                    {
                        time: "08:00 - 09:15",
                        title: "Registration & Breakfast"
                    },
					{
                        time: "09:15 - 09:30",
                        title: "Opening",
                        //recordedUrl: "http://www.ustream.tv/recorded/xxx",
                        speaker: false
                    },
                    {
                        time: "09:30 - 10:15",
                        title: "The Surprising Power of Small Habits",
                        //recordedUrl: "http://www.ustream.tv/recorded/xxx",
                        speaker: true
                    },
                    {
						title: "From Ego To Eco-system Economies: Leadership and Collective Awareness For The Emerging Future Through Theory U",
						time: "10:15 - 11:00",
                        speaker: true,
                        //recordedUrl: "http://www.ustream.tv/recorded/xxx"
                    },
                    {
                        time: "11:00 - 11:20",
                        title: "Break"
                    },
                    {
						time: "11:20 - 12:05",
						title: "Change the evolution - The elephant wants to be a mouse",
                        //recordedUrl: "http://www.ustream.tv/recorded/xxx",
                        speaker: true
                    },
                    {
                        time: "12:05 - 13:35",
                        title: "Lunch"
                    },
                    {
						title: "Transformational Leadership – Leader in the mirror",
						time: "13:35 - 14:20",
                        //recordedUrl: "http://www.ustream.tv/recorded/xxx",
                        speaker: true
                    },
                    {
                        time: "14:20 - 16:05",
                        title: "<b>Open Space</b>"
                    },
                    {
                        time: "16:05 - 16:25",
                        title: "Break"
                    },
                    {
						title: "Teaching an elephant how to dance",
						time: "16:25 - 17:10",
                        //recordedUrl: "http://www.ustream.tv/recorded/xxx",
                        speaker: true
                    },
                ]
            },
            {
                header: "Day 2 (Thursday)",
                slots: [
                    {
                        time: "08:00 - 09:15",
                        title: "Registration & Breakfast"
                    },
                    {
						time: "09:15 - 10:00",
						title: "The Experimentation Mindset",
                        speaker: true,
                        //recordedUrl: "http://www.ustream.tv/recorded/xxx"
                    },
					{
						title: "On the way to a teal school - building purposeful education",
						time: "10:00 - 10:45",
                        speaker: true,
                        //recordedUrl: "http://www.ustream.tv/recorded/xxx"
                    },
                    {
                        time: "10:45 - 11:05",
                        title: "Break"
                    },
					{
						title: "Coaching \"self-organising\" teams",
						time: "11:05 - 11:50",
                        speaker: true,
                        //recordedUrl: "http://www.ustream.tv/recorded/xxx"
                    },
                    {
                        time: "11:50 - 13:20",
                        title: "Lunch"
                    },
					{
						title: "Introducing Holacracy: A New Management System for Purpose-Driven Organizations",
						time: "13:20 - 14:05",
						speaker: true,
                        //recordedUrl: "http://www.ustream.tv/recorded/xxx"
					},
                    {
                        time: "14:05 - 15:50",
                        title: "<b>Open Space</b>"
                    },
                    {
                        time: "15:50 - 16:10",
                        title: "Break"
                    },
					{
						title: "Holacracy implementation in Hungary",
						time: "16:10 - 16:55",
						speaker: true,
                        //recordedUrl: "http://www.ustream.tv/recorded/xxx"
					},
					{
						title: "The Trusted Executive: Nine leadership habits that inspire results, relationships and reputation",
						time: "16:55 - 17:40",
						speaker: true,
                        //recordedUrl: "http://www.ustream.tv/recorded/xxx"
					},
						]
            },
			{
                header: "Day 3 (Friday)",
                slots: [
                    {
                        time: "08:00 - 09:15",
                        title: "Registration & Breakfast"
                    },
                    {
						title: "Future Focused Leaders Create Cultures of Purpose",
						time: "9:15 - 10:00",
                        //recordedUrl: "http://www.ustream.tv/recorded/xxx",
                        speaker: true
                    },
					{
						time: "10:00 - 10:45",
                        title: "John Bunch",
                        //recordedUrl: "http://www.ustream.tv/recorded/xxx",
                        speaker: true
                    },
                    {
                        time: "10:45 - 11:05",
                        title: "Break"
                    },
                    {
                        time: "11:50 - 13:20",
                        title: "Lunch"
                    },
                    {
					    title: "Introduction to Nonviolent Communication",
						time: "13:20 - 14:50",
                        //recordedUrl: "http://www.ustream.tv/recorded/xxx",
                        speaker: true
                    },
                    {
                        time: "14:50 - 15:10",
                        title: "Break"
                    },
					{
						title: "“One” lean operations strategy – How to resolve the efficiency paradox",
						time: "15:10 - 16:10",
                        //recordedUrl: "http://www.ustream.tv/recorded/xxx",
                        speaker: true
                    },
                    {
                        time: "16:10 - 16:40",
                        title: "Closing"
                    },
                ]
            }
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
                presentation: {
                    title: "The Surprising Power of Small Habits",
                    description: "This session is about the hidden forces that shape our behavior at work and at home. We will cover the psychology of how habits work and practical strategies for how to stick to good habits and break bad ones.",
                    day: "Day 1 (Wednesday)",
                    time: "09:30 - 10:15",
               }
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
                presentation: {
                    title: "“One” lean operations strategy – How to resolve the efficiency paradox",
                    description: "Lean is the most spread management concept of all time, yet academically, there is not even a generally accepted definition of lean. When it comes to “what” lean actually is, the confusion is overwhelming. A variety of management concepts, with different origin and purpose, are today competing for attention within organizations. What improvement concept is the best? How can we achieve consistency when new concepts are almost launched every year? How can we achieve congruence when we adopt different concepts in different contents?<br><br>In this lecture, <b>Niklas Modig</b> - bestselling author of «This Is Lean» - shares his latest insights on lean. Niklas sheds new light on what lean really is about and pragmatically helps you sort out the various aspects of the management philosophy into a coherent whole - one strategy to attain effectiveness and efficiency throughout your whole value chain. Niklas will inspire you why and how to develop a flow efficient and “self-fishing” organization.",
                    day: "Day 3 (Friday)",
                    time: "15:10 - 16:10",
               }
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
                presentation: {
                    title: "Introducing Holacracy: A New Management System for Purpose-Driven Organizations",
                    description: "Organizations are the most powerful force for progress on the planet. Yet even the most consciously run business is often limited by an organizational structure that’s not designed to support a dynamic, purpose-driven company. Sometimes those within achieve great results despite the organization’s management structure, but rarely because of it – more often it subtly works against efforts to nurture a conscious, empowered culture. There has to be a better way.<br><br>Holacracy is a fundamentally different “operating system” for an organization, with a new approach to clarifying accountability, distributing power, and structuring an organization’s functions and flows. It operates without a traditional top-down management hierarchy, and yet its alternative approach to structuring a company allows the alignment, clarity, and rapid decision-making that are often lacking in “flat” organizations.<br><br>This session introduces the core principles and practices of Holacracy through presentation, Q&A, and stories of companies using the method. Participants will leave with a vision for a completely novel way to structure an organization, and key questions to consider around how their organization’s structure interplays with building a conscious culture and purpose-driven business.",
                    day: "Day 2 (Thursday)",
                    time: "13:20 - 14:05",
               }
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
                presentation: {
                    title: "The Experimentation Mindset",
                    description: "Among the traits that distinguish a good team from a great team is their ability to innovate. Despite the rhetoric in favor of innovation, most organizations are stuck in an implementation mindset, stifling creativity, excellence, and the resultant innovation. The experimentation mindset frees us from self-imposed constraints, allowing us to continually learn and improve. In this session, we'll talk about how we learn as individuals and how we learn as organizations. We'll take a look at some examples of the experimentation mindset happening in the agile community today and we'll talk about how you can foster such a mindset in your own organization.",
                    day: "Day 2 (Thursday)",
                    time: "09:15 - 10:00",
               }
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
                presentation: {
               //      title: "Title",
               //      description: "Description",
                    day: "Day 3 (Friday)",
                    time: "10:00 - 10:45",
               }
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
                presentation: {
                    title: "Introduction to Nonviolent Communication",
                    description: "If something happens and you don’t like, speak up, without being critical!<br>• Would you like to be able to stand up for yourself in a way that evokes cooperation and deeper connection?<br>• Are you fed up with trying your best to communicate, only to find that your intention is not getting through and that you end up with more issues?<br>• Would you like to be able to hear not just what people are saying but what is in their hearts?<br>• Would you like to know when respectful understanding is enough and when it is important to come to agreement?<br><br>Nonviolent Communication (NVC) has been called the “language of life”. It was developed by US psychologist Marshall B. Rosenberg in the sixties, and is now practiced in more than 70 different countries worldwide. By focusing on each person’s feelings and needs and by working with these, NVC helps people to find common ground beyond their cultural differences, as needs are neutral and shared by all of us. NVC is effective in helping people suspend judgment, freeing them from prejudice and culturally-patterned expectations. This greatly facilitates intercultural interaction.",
                    day: "Day 3 (Friday)",
                    time: "13:20 - 14:50",
               }
            },
            {
                anchor: "ReneKottlowski",
                name: "Rene Kottlowski",
                photo: "themes/stretchcon/img/speaker_renekottlowski.jpg",
                bio: "<p>My name is Rene Kottlowski, I am the Chief Operation Officer, responsible for all customer projects. I started my carrier at evosoft in 2001 in Germany as a junior consultant and had the opportunity to grow with the company. I came over to Hungary 1.5 years ago. I have seen a lot of changes in our company and I am really happy that I could be a part of these changes, especially when they went in the direction of organizational development.</p>",
                company: "evosoft",
                link: {
                    href: "http://www.evosoft.hu/",
                    text: "evosoft.hu"
                },
                presentation: {
                    title: "Change the evolution - The elephant wants to be a mouse",
                    description: "Are perfect companies really places where people like to work? Can these companies offer a long term perspective or is there a point when they have to rethink how they are organized and how they could and should work?<br><br>Growing, increasing productivity, becoming the market leader: this is what many companies have as their main targets.<br><br>During their corporate development, they start to build up departments, and a lot of other important or not so important things arise. From the outside, these companies appear perfect, well organized and able to withstand every storm. They have some well-known leaders, who represent the company to the inside and to the outside world.<br><br>In my presentation I´d like to share some challenges we have been faced during our organizational life cycle over the last 20 years. What mistakes did we make and what did we learn from them? What did we try out without knowing if it would really work? How did we manage to involve the whole organization and why was this necessary? What is our current situation and why do we still have so much room for improvement?",
                    day: "Day 1 (Wednesday)",
                    time: "11:20 - 12:05",
               }
            },
            {
                anchor: "JosephPelrine",
                name: "Joseph Pelrine",
                photo: "themes/stretchcon/img/speaker_josephpelrine.png",
                bio: "<p>As Kent Beck’s assistant, Joseph Pelrine was one of the first in the world who worked with eXtreme Programming. As Europe’s first certified ScrumMaster and Trainer, he was largely responsible for introducing Scrum to the german-speaking part of Europe. For almost 20 years, Joseph Pelrine has been helping some of the world’s most important companies improve their software development process and successfully transition to Agile. A noted international speaker, he conducts research in the field of social complexity theory and its application to Agile processes, and is currently pursuing a PhD in psychology.</p>",
                company: "MetaProg GmbH",
                link: {
                    href: "http://twitter.com/josephpelrine",
                    text: "@josephpelrine"
                },
                presentation: {
                    title: "Coaching \"self-organising\" teams",
                    description: "Self-organisation is one of the most misunderstood concepts used in agile practice. If people really understood the dynamics of self-organising systems, they most probably would avoid trying to use it. Instead, they (mis-)apply some ideas, close their eyes, wish real hard, hope that magic happens, and then use the term “unintended consequences” to describe the - often unfortunate - result. Nevertheless, self-organisation is a basic Agile principle, which teams are expected to use, so this talk will help you learn to understand how it works, and how to implement it in your teams.",
                    day: "Day 2 (Thursday)",
                    time: "11:05 - 11:50",
               }
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
                presentation: {
                    title: "Future Focused Leaders Create Cultures of Purpose",
                    description: "Are you looking for ways to increase employee engagement and improve organizational culture? Then focus on using purpose. Purpose-driven, future focused leaders create a culture of purpose-driven work and employee engagement. In this talk, you’ll learn how to define purpose, what is needed to create a purpose driven DNA and how your own leadership values will add depth to work.",
                    day: "Day 3 (Friday)",
                    time: "9:15 - 10:00",
               }
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
                presentation: {
                    title: "The Trusted Executive: Nine leadership habits that inspire results, relationships and reputation",
                    description: "Many of us are tired of reading in the media about one business scandal after another. Trust in business leaders is at a low ebb; undermining performance, damaging relationships and destroying reputations. A new breed of executive will regain our trust by stepping up to a broader, braver role in the world and mastering essential trust-building habits. This session will explore a model of trust based on three pillars; ability, integrity and benevolence. Beneath the three pillars lie the nine habits that inspire trust; habits which will enable the trusted executive to deliver outstanding results, inspiring relationships and a positive contribution to society.",
                    day: "Day 2 (Thursday)",
                    time: "16:55 - 17:40",
               }
            },
            {
                anchor: "WiboKoole",
                name: "Wibo Koole",
                photo: "themes/stretchcon/img/speaker_wibokoole.jpg",
               bio: "<p>Wibo Koole is a Senior Practitioner at the Presencing Institute (MIT, Boston). As a management consultant and change manager his purpose is to facilitate the transformation of organizations and leaders in their endeavor to create sustainable value for all. In a world where change has become a constant, strategy, innovation and leadership transformation have become a challenge, but in all of us human beings and thus in organizations exists a potential that can be unleashed by taking unconditional responsibility for conscious learning and meaningful cooperation.<br>His clients, both corporate and social, range from corporations like Airbus Group, AirFrance/KLM, AfricInvest, Delta Lloyd  to local governments like the City of Amsterdam, from the Ministry of Agriculture in Ethiopia to international ngo's like Oxfam and Synergos.<br>Further, his work builds on his considerable experience as a high level manager and leader and on having led or facilitated a large diversity of organizations go through large transformations. He also brings a broad experience as a non-executive president of organizations like the University of Amsterdam's Academic Mental Health Clinic and the forerunner of ProDemos, the Dutch national institute for democracy and the rule of law.<br>He graduated with honors in political science at the University of Amsterdam, and took the Advanced Management Program at the Wharton Business School (University of Pennsylvania, Philadelphia, USA).</p>",
                company: "Presencing Institute -- MIT, Boston",
                link: {
                    href: "http://twitter.com/WiboKoole",
                    text: "@WiboKoole"
                },
                presentation: {
                    title: "From Ego To Eco-system Economies: Leadership and Collective Awareness For The Emerging Future Through Theory U",
                    description: "We live in a world of change as never before. Forces like population growth and global migration, climate change, internet and other technologies are reshaping markets, social structures and natural environments organizations are dealing with. On the one hand we sense incredible opportunities for bringing forth a world a much happier world. While on the other we still seem collectively to produce results nobody wants. How do leaders and organizations navigate into a more purposeful, brighter and connected world?<br><br>In this lecture Wibo Koole, senior practitioner at the Presencing Institute, mindful leadership expert and management consultant will introduce Theory U, a globally used social technology for creating change.<br><br>Theory U is both:<br>- A framework/lens/language for seeing and talking about our deeper levels of experience.<br>- A methodology for shifting the place we come from as we work in the world, and for operating from deeper levels more effectively (a process for making it happen).<br>- A phenomenon--part of a larger social movement that is about waking up to operating from Source (its latest online course called U.Lab is attended by over 40.000 participants that work both off- and online).<br><br>Meeting the challenges of this century requires updating our economic logic and operating system from an obsolete “ego-system” focused entirely on the well-being of oneself to an eco-system awareness that emphasizes the well-being of the whole.",
                    day: "Day 1 (Wednesday)",
                    time: "10:15 - 11:00",
               }
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
                presentation: {
                    title: "On the way to a teal school - building purposeful education",
                    description: "Schools are the counterexample for effective, adaptable, resilient and purposeful organizations. The DNA of our school systems stem from the century of industrialization. Children are objects, being processed in rather soulless factories, and being treated as interchangeable units that need to be channeled through a predefined curriculum. The factory spirit has massive effects on students as well as staff. A fundamental change in school culture throughout Europe is desperately needed to build purposeful education.<br><br>The Evangelische Schule Berlin Zentrum believes that youth today have to be prepared for uncertainty, be actively linked to their surroundings, have to embrace failure and have to practice appreciation and empathy. Schools have to be transformed by radically putting students in charge.<br><br>The school, founded in 2007, holistically puts known pedagogical best cases into practices (i.e. school students learn in inclusive and age-mixed groups, pupils are defining and monitoring their own projects and use teachers as coaches), but moves far beyond that. From mere knowledge transfer to the ability to process knowledge and apply it to one’s own actions, from teaching children to do something to putting children in charge of shaping their own education and life. In school assemblies pupils learn to publicly praise their peers – to cultivate feedback and empathy. One of the subjects is called “Responsibility”, centering on civic engagement in the local community. Also, every student has to annually (for three years in a row) master a self-chosen three-week “Challenge” outside of school with almost no budget, like hiking across Germany or help building something in a social institution. Although students have not been selected for intellectual ability, their GPAs in A levels are comparable or better than in other German high schools.<br><br><b>Christian Hausner</b> opens up a 360 degree view on the school, pointing out the main success factors for the school in terms of pedagogical practice and work culture.",
                    day: "Day 2 (Thursday)",
                    time: "10:00 - 10:45",
               }
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
                presentation: {
                    title: "Transformational Leadership – Leader in the mirror",
                    description: " Leading and being the change in the organisation.<br><br><b>“Everything changes. Everything is connected. Pay attention.” – Classic Buddhist teaching</b><br><br>Transformational Leadership is a new must nowadays! Today’s organisations are in a constant move in order to respond to the needs of unpredictable, continuously changing business environment. Every day is full of complex challenges, which require developing answers and solutions that are yet unknown. Today’s workforce is diverse with different needs and ambitions, therefore, the composition of teams are dynamically changing and uneven. Leaders must respond to these challenges in a way <b>to expand their leadership capacity to be, think and lead in a transformational way</b>.",
                    day: "Day 1 (Wednesday)",
                    time: "13:35 - 14:20",
               }
            },
            {
                anchor: "AdamBankoGergelyOrban",
                name: "Ádám Bankó, Gergely Orbán",
                photo: "themes/stretchcon/img/speaker_adambankogergelyorban.png",
                bio: "<p><strong>Ádám Bankó</strong> — <a href=\"http://twitter.com/adam_banko\">@adam_banko</a> — works on scaling organizations and code. He worked as a developer at Prezi while it has grown from 30 to 200 people. This experience fueled his interest in organization development. Now he guides Lab.Coop on the way to a scalable agile organization.</p><p><strong>Gergely Orbán</strong> — is leading organizational change and manage IT projects at Doctusoft. Coach teams and individuals and live the story they share while they go together for the project objectives. His recent focus is on: Self management and self governing teams, Teal organizational practices (Frederic Laloux), Holacracy, Mindfulness in work.</p>",
                company: "Lab.Coop, Doctusoft",
                presentation: {
                    title: "Holacracy implementation in Hungary",
                    description: "See a talk about two different journies to Holacracy.<br><br>One is an experimental transition in Doctusoft, changing the operating structure of a division from conventional to this new adaptive system.<br><br>The other example is Lab.Coop, an 18 person employee-owned company built from scratch on the priciples of Holacracy.",
                    day: "Day 2 (Thursday)",
                    time: "16:10 - 16:55",
               }
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
                presentation: {
                    title: "Teaching an elephant how to dance",
                    description: "What can you do, working for a 130+ year old behemoth that employs more than 300.000 people world wide across many different industries to not drop into obsolescence in these VUCA times?<br><br><b>Tim Steigert</b> is sharing some insight on how GE has set out to reinvent itself in a time where people try to understand what \"digital disruption\" is really all about and where the average age of companies on the Forbes 500 has dropped from 70+ to 15 years since 2000.",
                    day: "Day 1 (Wednesday)",
                    time: "16:25 - 17:10",
               }
            },
        ],
        eventorganizers: [
            {
                name: "Bernadett Otterbein, event organizer",
                photo: "themes/stretchcon/img/org_bernadettotterbein.png",
                bio: "I’m a Communication Specialist at Ustream responsible of developing and handling PR and communications duties and co-organising international tech conferences in Budapest (as STRETCH, CRAFT, CRUNCH, AMUSE). At Stretch conference I'm being the main liaison between sponsors as they execute their partnership, and taking care of all duties to create a positive experience for conference partners, attendees and speakers.",
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
                name: "Bálint Köves, program committee, chief organizer",
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
        // List of Workshops
        workshops: [
            {
                anchor: "DocNortonWorkS",
                name: "Doc Norton",
                photo: "themes/stretchcon/img/speaker_docnorton.jpg",
                bio: "Even high functioning teams occasionally have a hard time making decisions or coming up with creative ideas. There are times when the conversation seems to drag on long after a decision is reached. There are times when we have too many people involved in the discussion or the wrong people involved. There are times when we're not sure who's the actual decision maker. And there are those times when we just seem to be out of synch with each other. This creative collaboration workshop provides tools that help resolve all of these issues.",
                company: "Creative Collaboration: Tools for Teams",
                date: "8th December 2015"
                // link: {
                //    href: "http://twitter.com/james_clear",
                //    text: "@james_clear"
                // },
               //  presentation: {
               //      title: "Title",
               //      description: "Description",
               //      day: "Day 1 (Thursday)",
               //      time: "09:20 - 10:20",
               // }
            },
            {
                anchor: "WiboKooleWorkS",
                name: "Wibo Koole",
                photo: "themes/stretchcon/img/speaker_wibokoole.jpg",
                 bio: "Over the last few years Mindful Leadership has worldwide become a core element in corporate leadership programs. In this half day workshop you will learn how using your emotional intelligence and focusing your attention through mindfulness can greatly enhance your leadership performance.<br><br><b>The Mindful Leadership workshop evolves around these themes:</b><ul><li>The science behind mindfulness and leadership</li><li>What is mindful leadership?</li><li>Health and well-being, stress and resilience, focus and mindset</li><li>Emotional and social intelligence.</li><li>Experience mindfulness first hand through directly applicable exercises</li><li>Build your mindful leadership performance.</li></ul><br>We will start this workshop with the science behind mindfulness and its applications in a business leadership context. We will present recent research at the Center for Mindfulness into mindful leadership programs at work, which shows significant positive outcomes on attention, stress, motivation and effectiveness.<br>The workshop will be experiential and highly interactive. Participants will be guided through several mindfulness exercises, in order to understand the practice of mindfulness from direct experience. This experience gives the opportunity to test the possible effect first hand.<br>We will then link mindfulness to the daily practice of high level leaders building on the Mindful Leadership-model from my book. Important elements here will be the function of mindfulness practices to create a higher level of personal resilience and an open mind. These are two crucial capabilities that help to steer attention (both personal and organizational) in a continuously shifting and very demanding corporate environment. Participants in the workshop will learn how to apply the learnings in their own daily work and life as a leader. Tools and tips on how to do this will be provided.<br>Mindful leadership has applications on both personal, team and strategic level. While focusing on the personal leadership level, we will show an overview of applications on team and strategy level. ",
                company: "Mindful Leadership. Enhancing leadership performance through emotional intelligence and mindfulness",
                date: "8th December 2015"
                // link: {
                //    href: "http://twitter.com/james_clear",
                //    text: "@james_clear"
                // },
               //  presentation: {
               //      title: "Title",
               //      description: "Description",
               //      day: "Day 1 (Thursday)",
               //      time: "09:20 - 10:20",
               // }
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
