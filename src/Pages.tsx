import code from './Assets/code.jpg'
import discussion from './Assets/discussion.jpg'

const Pages : Page[] = [
    {
        id: 'consultant',
        name: 'Consultant',
        images: [],
        paragraphs: [
            {text: 'You need to make a decision or simply have no idea how you should build up your application, microservice or infrastructure?'},
            {text: 'I can help, giving you the information you need for an informed decision. There is almost always a good, easy solution which is fast and easy to adapt.'},
            {text: 'Whatever it will be, I will not let you alone, helping to setup or migrate your solution, schooling and spreading knowledge to your devs.'}
        ]
    },
    {
        id: 'software_engineer',
        name: 'Software Engineer',
        images: [
            code
        ],
        paragraphs: [
            {text: 'As an apprenticed software developer with many years of fullstack-development experience in wide range of languages, frameworks, testing- and infrastructural technologies I can be your synergy provider to help your team build up your application.'},
            {text: 'You already have an, maybe outdated, application?'},
            {text: 'No problem! It is my special skill to turn big, fat, old monoliths into a nice, readable, mantainable, testable and therefore error safe code, which your developers can rely on for many more years.'}
        ]
    },
    {
        id: 'scrum_master',
        name: 'Scrum Master',
        images: [
            discussion
        ],
        paragraphs: [
            {text: 'Can you feel your team is stressed and tied up?'},
            {text: 'My job as a scrum master is to make your team feel more comfortable. As to many comfortableness is contra-productive, the right amount of psychological safety is the key to a productive, sucessful team.'},
            {text: 'This safety, bringing along better communication and promoting synergy, is making your employees dive deeper and faster into your projects, being more motivated and bound to your company.'}
        ]
    },
];

export default Pages;