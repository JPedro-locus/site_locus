import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import Services from "../IntroductionServices/Services";
import CallActionContact from "../../../Components/CallActionContact";
import IntroductionServicesMobile from "../IntroductionServicesMobile/index";
import {
    StyledServiceContent,
    StyledServiceTitle,
    StyledServiceDescription,
    StyledLineTitle,
    StyledLine,
    StyledMaxWidth,
    StyledServiceContentMobile,
    MainIntroductionServices,
    MainIntroductionServicesMobile,
    StyledCardsSquad,
    TextCardsSquad
} from './styles';

import ScrollServices from '../ScrollServices';

function DesignPage() {
    const navigate = useNavigate();
    const redirectTo = (path) => {
        navigate(path);
    }
    const { t } = useTranslation();

    return (
        <>
            <ScrollServices />
            <MainIntroductionServices>
                <Services service=" / Design Inception" />
            </MainIntroductionServices>
            <MainIntroductionServicesMobile>
                <IntroductionServicesMobile service=" / Design Inception" />
            </MainIntroductionServicesMobile>
            <StyledServiceContent>
                <StyledMaxWidth>
                    <StyledLineTitle>
                        <StyledServiceTitle>Squad Outsourcing</StyledServiceTitle>
                        <StyledLine />
                    </StyledLineTitle>
                    <StyledServiceDescription>
                        É a oferta sob demanda de times completos de desenvolvimento,  e com mais independência para gerir o projeto, - com especialistas product owner, product manager, tech leader, UX e UI, DevOps, entre outros - para atuar em projetos. Ou seja, nesse modelo, a empresa conta com profissionais que auxiliam a solucionar seus desafios do dia a dia relacionados à tecnologia, sem precisar dedicar líderes para fazer a gestão direta dessa equipe.
                    </StyledServiceDescription>
                    <StyledCardsSquad>
                        <p>Menor tempo de captação de profissionais</p>
                        <TextCardsSquad>
                            <p>Podemos atuar com squads mistas, onde parte da squad é formada por profissionais da Locus e parte pode ser formada pelo time do cliente, trabalhando como se fôssemos um único time;</p>
                        </TextCardsSquad>
                    </StyledCardsSquad>
                    <StyledCardsSquad>
                        <p>Profissionais com experiência < br/> para desenvolver as suas soluções</p>
                        <TextCardsSquad>
                            <p>Formamos uma squad completa de desenvolvimento, multidisciplinar, com foco em design, tecnologia e produto, de acordo com as necessidades descritas;</p>
                        </TextCardsSquad>
                    </StyledCardsSquad>
                    <StyledCardsSquad>
                        <p>Contratação pelo tempo de desenvolvimento e <br /> necessidade de profissionais</p>
                        <TextCardsSquad>
                            <p>A composição da squad pode ser revisada, aumentando ou reduzindo o capacity conforme a necessidade de negócio.</p>
                        </TextCardsSquad>
                    </StyledCardsSquad>
                    <StyledCardsSquad>
                        <p>Avaliação do seu projeto</p>
                        <TextCardsSquad>
                            <p>Realizamos uma consultoria aprofundada do escopo do seu projeto, ecossistema tecnológico da organização, definição deMVP, construção de backlog, etc, para assim definir o melhor e mais apropriado conjunto de profissionais dedicados a atender sua demanda;</p>
                        </TextCardsSquad>
                    </StyledCardsSquad>
                    <StyledCardsSquad>
                        <p>Equipes prontas, com profissionais que já se <br /> conhecem e trabalham bem juntos</p>
                        <TextCardsSquad>
                            <p>Realizamos um fit cultural da squad com o cliente antes de iniciar o trabalho, para que a comunicação seja fluída e o processo forneça total transparência e clareza ao cliente;</p>
                        </TextCardsSquad>
                    </StyledCardsSquad>
                    <StyledCardsSquad>
                        <p>Gestão do projeto nas <br /> mãos de equipes experientes</p>
                        <TextCardsSquad>
                            <p>A squad é acompanhada por um PM da Locus que garante o sucesso do projeto que está sendo entregue e pode contribuir com insights valiosos para o seu negócio;</p>
                        </TextCardsSquad>
                    </StyledCardsSquad>
                    <StyledCardsSquad>
                        <p>Benefícios da agilidade sem a necessidade de <br /> investir internamente</p>
                        <TextCardsSquad>
                            <p>Trabalhamos em modelo ágil, adaptando o modelo de trabalho conforme metodologia do cliente (kanban, scrum, chapters/tribes, etc);</p>
                        </TextCardsSquad>
                    </StyledCardsSquad>
                </StyledMaxWidth>
            </StyledServiceContent>
             <StyledServiceContentMobile>
                <StyledServiceTitle>Squad Outsourcing</StyledServiceTitle>
                <StyledLine />
                <StyledServiceDescription>
                    É a oferta sob demanda de times completos de desenvolvimento,  e com mais independência para gerir o projeto, - com especialistas product owner, product manager, tech leader, UX e UI, DevOps, entre outros - para atuar em projetos. Ou seja, nesse modelo, a empresa conta com profissionais que auxiliam a solucionar seus desafios do dia a dia relacionados à tecnologia, sem precisar dedicar líderes para fazer a gestão direta dessa equipe.
                </StyledServiceDescription>
                <StyledCardsSquad>
                        <p>Menor tempo de captação de profissionais</p>
                        <TextCardsSquad>
                            <p>Podemos atuar com squads mistas, onde parte da squad é formada por profissionais da Locus e parte pode ser formada pelo time do cliente, trabalhando como se fôssemos um único time;</p>
                        </TextCardsSquad>
                    </StyledCardsSquad>
                    <StyledCardsSquad>
                        <p>Profissionais com experiência < br/> para desenvolver as suas soluções</p>
                        <TextCardsSquad>
                            <p>Formamos uma squad completa de desenvolvimento, multidisciplinar, com foco em design, tecnologia e produto, de acordo com as necessidades descritas;</p>
                        </TextCardsSquad>
                    </StyledCardsSquad>
                    <StyledCardsSquad>
                        <p>Contratação pelo tempo de  <br />  desenvolvimento e necessidade de profissionais</p>
                        <TextCardsSquad>
                            <p>A composição da squad pode ser revisada, aumentando ou reduzindo o capacity conforme a necessidade de negócio.</p>
                        </TextCardsSquad>
                    </StyledCardsSquad>
                    <StyledCardsSquad>
                        <p>Avaliação do seu projeto</p>
                        <TextCardsSquad>
                            <p>Realizamos uma consultoria aprofundada do escopo do seu projeto, ecossistema tecnológico da organização, definição deMVP, construção de backlog, etc, para assim definir o melhor e mais apropriado conjunto de profissionais dedicados a atender sua demanda;</p>
                        </TextCardsSquad>
                    </StyledCardsSquad>
                    <StyledCardsSquad>
                        <p>Equipes prontas, com profissionais que  <br />  já se conhecem e trabalham bem juntos</p>
                        <TextCardsSquad>
                            <p>Realizamos um fit cultural da squad com o cliente antes de iniciar o trabalho, para que a comunicação seja fluída e o processo forneça total transparência e clareza ao cliente;</p>
                        </TextCardsSquad>
                    </StyledCardsSquad>
                    <StyledCardsSquad>
                        <p>Gestão do projeto nas <br /> mãos de equipes experientes</p>
                        <TextCardsSquad>
                            <p>A squad é acompanhada por um PM da Locus que garante o sucesso do projeto que está sendo entregue e pode contribuir com insights valiosos para o seu negócio;</p>
                        </TextCardsSquad>
                    </StyledCardsSquad>
                    <StyledCardsSquad>
                        <p>Benefícios da agilidade sem a  <br /> necessidade de investir internamente</p>
                        <TextCardsSquad>
                            <p>Trabalhamos em modelo ágil, adaptando o modelo de trabalho conforme metodologia do cliente (kanban, scrum, chapters/tribes, etc);</p>
                        </TextCardsSquad>
                    </StyledCardsSquad>
            </StyledServiceContentMobile> 
            <CallActionContact />
        </>
    );
}

export default DesignPage;