import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    java,
    springBoot,
    kotlin,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    react,
    sass,
    tailwindcss,
    threads,
    typescript,
    logoLanaHomeDecor,
    vivo,
    goCrypto,
    SilentSignal

} from "../assets/icons";

export const skills = [

    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },

    {
        imageUrl: springBoot,
        name: "SpringBoot",
        type: "Backend",
    },

    {
        imageUrl: kotlin,
        name: "Kotlin",
        type: "Backend",
    },

    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },

    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "LanaHomeDecor",
        company_name: "LanaHomeDecor",
        icon: logoLanaHomeDecor,
        iconBg: "#FFB6C1",
        date: "Dezembro 2019 - Junho 2022",
        points: [
            "No início da pandemia, fui proprietária da loja LanaHomeDecor, especializada em decoração de interiores. Nessa experiência, criei quadros personalizados utilizando a plataforma CorelDRAW para atender às preferências dos meus clientes. Além disso, aprendi a gerenciar o relacionamento com os clientes e desenvolver um planejamento eficiente para garantir entregas precisas e pontuais. Essa experiência me proporcionou valiosas lições que continuam a me guiar na busca por excelência profissional a cada dia",
        ],
    },
    {
        title: "Estagiária",
        company_name: "Vivo Telefonica",
        icon: vivo,
        iconBg: "#ffff",
        date: "Março 2023 - Junho 2024",
        points: [
            "Desenvolvimento do NetCompass.",
            "Foco no backend, modelagem de dados em Java com Spring Boot.",
            "Utilização do Camunda para aprimoramento de processos.",
            "Responsável pelo UX do Vivo Fly utilizando Angular e TypeScript.",
            "Desenho de arquiteturas para planejamento de redes.",
            "Análise de demandas contínuas e leitura das normas 3GPP.",
            "Participação no projeto NAAS.",
            "Criação de documentação detalhada (DAPs).",
            "Automação de Plataformas internas",
            "Yellow Belt.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Lana-Ribeiro',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/lana-ribeiro/',
    }
];

export const projects = [

    {
        iconUrl: goCrypto,
        theme: 'btn-back-black',
        name: 'Frontend GoCrypto',
        description: 'Criei o Desing e desenvolvi a plataforma GoCrypto utilizando Vue e TailWind, onde o projeto se concentra em uma plataforma avançada de venda de criptomoedas, construída com as melhores tecnologias disponíveis para garantir uma experiência rápida, segura e confiável aos nossos usuários.',
        link: 'https://github.com/Lana-Ribeiro/GoCrypto',
    },

    {
        iconUrl: SilentSignal,
        theme: 'btn-back-blue',
        name: 'Desenvolvedora Frontend SilentSignal',
        description: 'Desenvolvi juntamente com meu grupo o Silent Signal é um aplicativo de mensagens focado em segurança e privacidade, desenvolvido usando Dart e Flutter. O objetivo do Silent Signal é oferecer uma plataforma de comunicação segura e privada para seus usuários, disponível tanto para Android quanto para iOS.',
        link: 'https://github.com/AlexWilliam12/silent-signal-front?tab=readme-ov-file',
    },

    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack MVC SpringBoot',
        description: 'Desenvolvi um projeto academico utilizando Java e SpringBoot onde é um projeto de CRUD (Create, Read, Update, Delete) desenvolvido em Java para um trabalho acadêmico. O projeto segue o padrão arquitetural Modelo-Visão-Controlador (MVC) e utiliza Servlets para lidar com a camada de controle e JSP para a camada de visão.',
        link: 'https://github.com/Lana-Ribeiro/Crud-java-mvc-Aluno',
    },

    {
        iconUrl: threads,
        theme: 'btn-back-pink',
        name: 'Desenvolvedora BackEnd Netcompass',
        description: 'integro o time de DevOps, contribuindo para o desenvolvimento do NetCompass, um banco de dados único que unifica diversas fontes. Minha atuação concentra-se no backend, modelando dados em Java com Spring Boot e utilizando Camunda para aprimorar a eficiência do processo.'
    },

    {
        iconUrl: threads,
        theme: 'btn-back-yellow',
        name: 'Desenvolvedora Frontend Vivo Fly',
        description: 'Auxiliei no novo logo e Ux do Vivo Fly , usando ferramentas Framework Angular, Linguagens TypeScript.'
    },



];  