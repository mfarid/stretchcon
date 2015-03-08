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
            'schedule',
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
                        time: "08:00 - 09:00",
                        title: "Registration & Breakfast"
                    },
                    {
                        time: "09:00 - 09:20",
                        title: "A conference can change your life",
                        recordedUrl: "http://www.ustream.tv/recorded/56103084",
                        speaker: true
                    },
                    {
                        time: "09:20 - 10:20",
                        title: "The Art of Stress-Free Productivity",
                        keynote: true,
                        speaker: true,
                        recordedUrl: "http://www.ustream.tv/recorded/56103363"
                    },
                    {
                        time: "10:20 - 10:40",
                        title: "Break"
                    },
                    {
                        time: "10:40 - 11:20",
                        title: "What you say matters. How you say it matters even more.",
                        recordedUrl: "http://www.ustream.tv/recorded/56104542",
                        speaker : true
                    },
                    {
                        time: "11:20 - 12:00",
                        title: "Mindsets and Realising Human Potential",
                        recordedUrl: "http://www.ustream.tv/recorded/56105138",
                        speaker: true
                    },
                    {
                        time: "12:00 - 13:30",
                        title: "Lunch"
                    },
                    {
                        time: "13:30 - 14:10",
                        title: "Mens Sana In Corpore Sano : A Healthy Mind In A Healthy Body",
                        recordedUrl: "http://www.ustream.tv/recorded/56107221",
                        speaker: true
                    },
                    {
                        time: "14:10 - 14:50",
                        title: "Finding Me - The value part",
                        recordedUrl: "http://www.ustream.tv/recorded/56107988",
                        speaker: true
                    },
                    {
                        time: "14:50 - 15:10",
                        title: "Break",
                    },
                    {
                        time: "15:10 - 15:50",
                        title: "Dance with the System",
                        recordedUrl: "http://www.ustream.tv/recorded/56109204",
                        speaker: true
                    },
                    {
                        time: "15:50 - 16:30",
                        title: "Bringing everyone to the table - Stretching impact through meaningful partnerships",
                        recordedUrl: "http://www.ustream.tv/recorded/56109962",
                        speaker: true
                    },
                    {
                        time: "16:30 - 17:10",
                        title: "Challenging Coaching: Going beyond traditional coaching to face the FACTS.",
                        recordedUrl: "http://www.ustream.tv/recorded/56110818",
                        speaker: true
                    },
                    {
                        time: "17:10 - 18:00",
                        title: "Snacks & Drinks"
                    },
                    {
                        time: "20:00",
                        title: "After Party @ GMK (Gozsdu Mano Klub)"
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
                        time: "10:00 - 11:00",
                        title: "Intent-Based Leadership. Create Leaders at Every Level.",
                        keynote: true,
                        recordedUrl: "http://www.ustream.tv/recorded/56134415",
                        speaker: true
                        },
                        {
                        time: "11:00 - 11:40",
                        title: "How design will solve the wicked problems in our world",
                        recordedUrl: "http://www.ustream.tv/recorded/56135383",
                        speaker: true
                        },
                        {
                        time: "11:40 - 12:00",
                        title: "Break"
                        },
                        {
                        time: "12:00 - 12:40",
                        title: "#TheNextBillion: Reaching the Next Billion With Life Changing Stories",
                        recordedUrl: "http://www.ustream.tv/recorded/56136523",
                        speaker: true
                        },
                        {
                        time: "12:40 - 13:20",
                        title: "It's a marathon, not a sprint",
                        recordedUrl: "http://www.ustream.tv/recorded/56137378",
                        speaker: true
                        },
                        {
                        time: "13:20 - 14:20",
                        title: "Lunch"
                        },
                        {
                        time: "14:20 - 15:00",
                        title: "Get Back to Play: How Play and Playfulness can help build better Products and more Innovative Teams",
                        recordedUrl: "http://www.ustream.tv/recorded/56139182",
                        speaker : true
                        },
                        {
                        time: "15:00 - 15:40",
                        title: "Conflict Isn't a Bad Word",
                        recordedUrl: "http://www.ustream.tv/recorded/56140137",
                        speaker : true
                        },
                        {
                        time: "15:40 - 16:00",
                        title: "Break",
                        },
                        {
                        time: "16:00 - 16:40",
                        title: "The Missing Lecture",
                        recordedUrl: "http://www.ustream.tv/recorded/56141555",
                        speaker : true
                        },
                        {
                        time: "16:40 - 17:20",
                        title: "Lessons from the Road: A Look Into Exploration and Endurance",
                        recordedUrl: "http://www.ustream.tv/recorded/56142521",
                        speaker : true
                        },
                        {
                        time: "17:20 - 18:00",
                        title: "Panel Talk",
                        recordedUrl: "http://www.ustream.tv/recorded/56143468",
                        },
                        {
                        time: "18:00 - 18:20",
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
                   title: "The Art of Stress-Free Productivity",
                     description: "A presentation of the core principles and best practices for getting things done with minimal effort. David will share the keys and practical techniques for achieving and maintaining control and perspective in a world of too much to do.</i>",
                    day: "Day 1 (Thursday)",
                     time: "09:20 - 10:20",
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
                   title: "Intent-Based Leadership. Create Leaders at Every Level.",
                   description: "David Marquet imagines a work place where everyone engages and contributes their full intellectual capacity. A place where people are healthier and happier because they have more control over their work – a place where everyone is a leader. Intent-Based Leadership create an environment for people to contribute so that they feel valued and reach their potential. Leadership is not for the select few at the top. In highly effective organizations, there are leaders at every level. When we give people more authority, we create more effective leaders. Leaders embed the capacity for greatness in the people and practices of an organization, and decouple it from the personality of leaders.",
                   day: "Day 2 (Friday)",
                   time: "10:00 - 11:00",
                   }
                   },
                   {
                   anchor: "ZoeRomano",
                   name: "Zoë Romano",
                   photo: "themes/stretchcon/img/zoeromano.jpg",
                   bio: "<p>Zoë Romano is taking the sport of long-distance running to places it’s never been. In 2010, at age 23, she became the first female to run across the U.S. unsupported, and in 2013 became the first and only person to ever run all 2,000 miles of the Tour de France route. Completing this goal in ten weeks required Zoë to run 30 miles a day, taking only one day of rest every nine days. The course includes roughly 100,000 feet of elevation change, which is equal to three and a half Mt. Everest climbs. She burned through five pairs of sneakers, zillions of calories, battled dangerous weather, wild animals, exhaustion, and finally, complete and utter boredom. Throughout her journey, Zoë learned powerful lessons about what it means to be vulnerable and persistent; and how the relationship between uncertainty and determination can lead to successful innovation and pioneering in achieving a goal. </p>",
                   company: "Zoe Goes Running",
                   link: {
                   href: "http://twitter.com/zoeromano ",
                   text: "@zoeromano "
                   },
                   presentation: {
                   title: "Lessons from the Road: A Look Into Exploration and Endurance",
                   description: "In this presentation, Zoë will share lessons from her journey running the Tour de France - as they apply to a professional and leadership environment - through storytelling and shared discoveries. Her anecdotes focus on themes of perseverance, exploration, and re-thinking traditional notions of what’s possible. You’ll come away with the inspiration to push yourself in new ways, bridge the gap between personal ambition and community support, and, as Zoë says, to live your question. With her help, you’ll explore how to harness the power of vulnerability, how to uncover the virtue of uncertainty, and how to discipline your own determination, leaving you full of endorphins and big ideas.</i>.",
                   day: "Day 2 (Friday)",
                   time: "16:40 - 17:20",
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
                   title: "It's a marathon, not a sprint",
                   description: "We've all done an all-night coding or exam cram session. Think back: how did it really turn out? It's hard to be strategic, thoughtful, and purposeful when you're sprinting all the time. In this talk, Hugh shares his experiences on how and why to treat your journey as a software engineering professional as a marathon, and not endless sprints. He'll share stories, ideas, and thoughts from successful leaders who think and act in a sustainable, balanced way in their careers. He'll leave you believing that you should live a balanced life, and that it'll lead to being a more productive and impactful leader over the journey of your career.",
                   day: "Day 2 (Friday)",
                   time: "12:40 - 13:20",
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
                   title: "Conflict Isn't a Bad Word",
                   description: "Growing productive teams is about hiring the right people and building a culture of excellence. The best cultures are built on trust, but also on conflict. In today's world conflict has a negative connotation but embracing conflict leads to more productive and higher performing teams. This talk will cover how to embrace conflict, keep it productive and build a culture for lasting success. It will draw upon some great concepts such as Patrick Lencioni's 'Five Dysfunctions of a Team' and Robert Sutton's 'The No Asshole Rule'",
                   day: "Day 2 (Friday)",
                   time: "15:00 - 15:40",
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
                   title: "What you say matters. How you say it matters even more.",
                   description: "Your success as a leader depends on your ability to communicate and use every speaking opportunity to assert your personal brand. Making the conversation memorable is what makes you influential. Jan Nolte, professional actress and executive voice coach, will show you how to move the audiences in your life.  You’ll learn the tools to speak with confidence, project with ease and move others to action in every situation.  Her entertaining, inspiring talk will take you from drab conformity to dazzling authenticity.",
                   day: "Day 1 (Thursday)",
                   time: "10:40 - 11:20",
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
                   title: "Mindsets and Realising Human Potential",
                   description: "Many people have big dreams, though then somehow get discouraged and diverted from passionately pursuing them. When inevitable setbacks are encountered, your prevailing mindset can play a decisive role in whether you disengage or systematically work to realise your potential. In this presentation, I will share some highlights of three decades of research regarding the nature of mindsets, what results from them, whether they can be changed, and practical implications for bringing out the best in yourself and others.",
                    day: "Day 1 (Thursday)",
                    time: "11:20 - 12:00",
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
                   title: "How design will solve the wicked problems in our world",
                   description: "We live in a rapidly changing world of endless potential. Technological possibilities are quadrupling and the amount of business models are expanding at a rate faster than the speed of light. At the same time we face more and more wicked problems like poverty, energy and pollution. Now is the time to come up with real disruptive ways of thinking and doing for developing innovative solutions. The challenge here is to design products, services and strategies that people actually desire. After all, disruptive innovation is not about pushing technology or making more money - it is about the user who needs to act upon and adopt to the solutions. Marieke Rietbergen will show how to create teams who disrespect anything but the user in such a way their workings find a valuable balance between business, technology and design.",
                   day: "Day 2 (Friday)",
                   time: "11:00 - 11:40",
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
                   title: "Challenging Coaching: Going beyond traditional coaching to face the FACTS.",
                   description: "Challenging Coaching is a real-world, timely, and provocative approach which provides a wake-up call to move beyond the limitations of traditional coaching. Based on the speaker's extensive experience working with CEOs and elite sport coaches, John will suggest that for too long coaching approaches have shied away from adopting a more challenging stance - a stance that can unlock a deeper potential in business leaders and their teams. Long-held coaching principles are put under the spotlight with the speaker questioning their relevance to a 21st-century business environment. John will explore his book's FACTS coaching model in theory and in practice using case studies, psychological research and lively anecdotes; inspiring the audience to challenge others using respectful yet direct techniques.</i>.",
                   day: "Day 1 (Thursday)",
                   time: "16:30 - 17:10",
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
                   title: "Finding Me - The value part",
                   description: "Looking for business results? Processes failed, struggling to deliver? Start focusing on the human software. Be more aware of yourself. Feel gratitude and connect to your own values before you work on any value proposition. Be brave to show and generous to share.  </i>.",
                   day: "Day 1 (Thursday)",
                   time: "14:10 - 14:50",
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
                   title: "Bringing everyone to the table - Stretching impact through meaningful partnerships",
                   description: "Ending world hunger is a team effort: It requires the skillset, creativity and influence of all stakeholders, far beyond the nonprofit world. In short, it takes a village. Alex Cottin, Associate Director of Partnerships at Action Against Hunger, will discuss how the international development landscape is stretching - moving away from the traditional corporate philanthropic paradigm and seeking to diversify relationships in more inclusive and innovative partnerships to change the face of humanitarian aid. Drawing upon a decade’s worth of experience on the front lines of disaster relief and development projects from Liberia to Haiti - he will outline a roadmap of how thinking differently about our approach to the world’s most pressing problems is both needed and possible to unleash our potential to scale up impact. He’ll highlight exciting ways that companies and teams from all sectors can - and must - have a seat at the table to put an end to global hunger.",
                   day: "Day 1 (Thursday)",
                   time: "15:50 - 16:30",
                   }
                   },
                   {
                   anchor: "HenriKivioja",
                   name: "Henri Kivioja",
                   photo: "themes/stretchcon/img/henrikivioja.jpg",
                   bio: "<p>Henri is Head Coach at Ericsson Finland. He has been working in R&D more than 13 years in different roles. His main insights come from scaling lean and agile into complex environment. Henri has been presenting his learnings in different conferences during past years and comes up always with a clear and inspiring message.</p>",
                   company: "Ericsson Finland",
                   link: {
                   href: "https://twitter.com/hkivioja",
                   text: "@hkivioja"
                   },
                   presentation: {
                   title: "Dance with the System",
                     description: "When I look around I see very clearly two “forces” fighting:  The world and how we experience it and our attempt to understand and control it. You may call the latter dogma, intent or process. What we usually try to achieve with this is a simplified view and linear cause-effect dependencies for better understanding. The other entity is entropy. In our surroundings entropy is everywhere. It is valid for SW and product development and it is valid for human interaction, information and work. This presentation is about how our people have learned to dance in the unbalanced world of these two entities. What have been the tools and thinking when moving beyond lean-agile? How we apply systems thinking and how we address people business? Key topics for the session are: Leadership and dancing metaphor; Entropy and commanders intent; Systems thinking in R&D; People business; Passion-compassion model; Radical Coaching. Main message embedded in the presentation is: How our leaders have learned to dance with the system?",
                   day: "Day 1 (Thursday)",
                   time: "15:10 - 15:50",
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
                   title: "#TheNextBillion: Reaching the Next Billion With Life Changing Stories",
                   description: "PCI Media Impact harnesses the power of good stories to educate people in countries around the globe about some of today’s most pressing issues. In this session, I will share a story of stories – narratives that inspire, empower and change the world.  In our first three decades, PCI Media Impact produced 5,000 episodes of 100 long-run serial dramas on TV and radio that have reached a billion listeners and viewers in over 50 countries. From addressing violence against women in Peru, to helping tackle Ebola in West Africa – we are helping build a better world through media. A billion is not a small number – but with seven billion global citizens, our work is far from finished. It’s time to stretch! In this session, I will give an overview of the organization’s unique storytelling methodology, explaining how locally created stories are changing lives. For the first time, I will share our strategy to reach another billion listeners and viewers in only five years as part of the #TheNextBillion initiative. It is a lofty goal, and we want your ideas on how to achieve it and, in so doing, extend the reach of our mission to change the world, one story at a time.</i>.",
                   day: "Day 2 (Friday)",
                   time: "12:00 - 12:40",
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
                   title: "Get Back to Play: How Play and Playfulness can help build better Products and more Innovative Teams",
                   description: "As children, we played in order to learn about the world around us and press against our growing boundaries. We took wild journeys of fantasy where every object in front of us had possibilities. This concept of child-eyes essentially means abandoning our ingrained assumptions about the world around us and seeing something with a sense of innocence. This talk will cover the concept of play as a cognitive developer, examine case studies where play and imagination contributed to amazing product design, and give some ideas as to how we can continue to do this with our team and on our own everyday to help strengthen our 'play' muscles. ",
                   day: "Day 2 (Friday)",
                   time: "14:20 - 15:00",
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
                   title: "Mens Sana In Corpore Sano : A Healthy Mind In A Healthy Body",
                   description: "Our minds and bodies do not exist in isolation. Even the Romans knew that. What the Romans didn't know was how our modern lifestyles - especially in the sedentary professions we tend to have - would throw the balance between them into crisis! Surprisingly going to the gym 2-3 times a week (if we even do that) doesn’t fix this. That latest studies are showing that more fundamental changes are needed - with NEAT (Non-Excercise Activity Thermogenesis) at the centre of it. Our diet, too, is critical to getting the best out of, not just our bodies, but our minds too. Doing the right things the right way can have a profound effect on how our minds and bodies work as a whole - and may literally be a matter of life and death!</i>.",
                   day: "Day 1 (Thursday)",
                   time: "13:30 - 14:10",
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
                   title: "The Missing Lecture",
                   description: "I want to share with you the missing lecture. This one lecture I’ve missed. While trivial to me in retrospect, this lesson was hidden from me years ago. I'll talk about two of my latest journeys. The first, changing an organisation. The second, building an organisation from scratch. How do we build an amazing development organisation? What is our role as leaders? I'll share what I’ve done wrong so you can learn faster. I'll give you my perspective, based on my experience, on what you should focus as leaders.",
                   day: "Day 2 (Friday)",
                   time: "16:00 - 16:40",
                   }
                   },
                   {
                   anchor: "JozsefCzapovics",
                   name: "Jozsef Czapovics",
                   photo: "themes/stretchcon/img/jozsefczapovics.jpg",
                   bio: "<p>I'm engineering director at Prezi. I believe in a bright future and our ability to build it together. I love to think about how to scale agile and what it means being a supportive manager. If you believe in a world where people go home everyday feeling happy with their work, we have already something in common. </p>",
                   company: "Prezi",
                   link: {
                   href: "http://twitter.com/czapinho",
                   text: "@czapinho"
                   },
                   presentation: {
                   title: "A conference can change your life",
                   description: "This is the story of how I sneaked in to Stretch last year for free.",
                   day: "Day 1 (Thursday)",
                   time: "09:00 - 09:20",
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
                name: "Attila Balogi, event organizer",
                photo: "themes/stretchcon/img/attilabalogi.jpg",
                bio: "Co-Organising international tech conferences in Budapest with 300-1000 participants. Project management of the events, Design and execute global communication campaigns for Stretch, Mloc.JS, Craft, Redefine ​Conferences.",
            company: "Prezi",
            link: {
                //href: "http://twitter.com/czapinho",
                //text: "@czapinho"
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
                name: "Microsoft Azure",
                logo: "themes/stretchcon/img/azure.png",
                url: "http://www.microsoft.com/"
            },
            {
                name: "Hamar Consulting",
                logo: "themes/stretchcon/img/hamar_logo.png",
                url: "http://www.hamar.hu/"
            },
            {
                name: "Precognox",
                logo: "themes/stretchcon/img/pre.png",
                url: "http://www.precognox.com"
            },
            {
                name: "Unicredit",
                logo: "themes/stretchcon/img/uni.png",
                url: "https://www.unicreditbank.hu/"
            },
            {
                name: "Logmein",
                logo: "themes/stretchcon/img/logmein.jpg",
                url: "http://www.logmein.com/"
            },
        ],

        // List of Partners
        partners: [
                 
            
            {
            name: "Budapest Business Journal",
            logo: "themes/stretchcon/img/bbj_logo.jpg",
            url: "http://bbj.hu"
            },
            {
            name: "Optional",
            logo: "themes/stretchcon/img/optional.png",
            url: "http://www.sprintconsulting.com"
            },
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
