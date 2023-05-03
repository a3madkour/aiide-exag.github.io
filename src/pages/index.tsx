import * as React from 'react';
import { Container } from 'react-bootstrap';
import AppLayout from '../components/AppLayout';
import Seo from '../components/Seo';

const IndexPage = () => {
    return (
        <AppLayout>
            <Seo title="EXAG 2023: Experimental AI in Games" />
            <Container className="py-5">
                <div>
                    <h2>What is EXAG?</h2>
                    <p>
                        The Experimental AI in Games (EXAG) workshop is a
                        workshop held at the AI for Interactive Digital
                        Entertainment conference (AIIDE). At EXAG, AI
                        practitioners from academia and industry are given a
                        platform to showcase their work on new applications of
                        AI in games.
                    </p>
                    <p>
                        EXAG will be taking place for its 10th year at the 2023
                        AIIDE AIIDE Conference. Beyond being just a workshop, EXAG
                        aims to foster a community where new ideas can be proposed
                        and developed within the space of the workshop itself, thanks
                        to sessions that emphasize showing, teaching, and inventing,
                        alongside the traditional paper presentations. We hope to continuously
                        support the presence of diverse voices from diverse backgrounds,
                        in our AIIDE community, through new participants choosing to
                        attend the broader conference.
                    </p>
                    <p>
                        We hope to see you at EXAG! Please reach out to the
                        organizing committee if you have any questions or
                        concerns.
                    </p>
                    <h2 className="mb-2">Announcements</h2>
                    <div className="announcement">
                        <h3>
                            EXAG is back for its 10th year at the 2023 AIIDE
                            Conference!
                        </h3>
                        <p>
                            Please see our call for papers with important dates.
                            We look forward to reviewing your submission. Please
                            feel free to reach out to the organizing committee
                            via Twitter or email if you have any questions.
                            Thank you for supporting EXAG, and we hope to see
                            you this fall!
                        </p>
                    </div>
                </div>
            </Container>
        </AppLayout>
    );
};

export default IndexPage;
