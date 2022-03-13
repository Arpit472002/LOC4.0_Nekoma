import { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import {MdExpandMore} from 'react-icons/md'
import { Grid } from "@mui/material";

export default function Faqs() {
  return (
    <>
    <Grid container display="flex" justifyContent="center" alignItems="center" width="300px" height="300px" marginLeft="50px">
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What are NGOs?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A non-governmental organization is an organization that generally is
            formed independent from government. They are typically nonprofit
            entities, and many of them are active in humanitarianism or the
            social sciences; they can also include clubs and associations that
            provide services to their members and others.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What do we do?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The function of NGO is to focus on all the issues concerning human
            rights, social, environmental and advocacy. They work to promote and
            improve the social and political conditions of the society on a
            broad scale. Some of the functions of NGO are:\r\n\r\nHuman rights
            and child rights\r\nPoverty eradication\r\nAnimal Rights\r\nPrevent
            Social Injustice\r\nConservation of Environment\r\nAged people care
            routine\r\nEmpowerment of women\r\nDisease Control and
            others\r\nHealth and Nutrition plans\r\nConservation of
            Wildlife\r\nHygiene and Sanitation conditions\r\nHumanitarian
            Relief\r\nEducation plans and literacy\r\nRefugee Crisis
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How do we do?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are not-for-profit bodies which means we do not have any
            commercial interest. We run on donations made by individuals,
            corporate and institutions. We engage in fundraising activities to
            raise money for carrying out the work they do. Ever since
            independence, we have played a crucial role in helping the needy in
            India, providing aid to the distressed and elevating the
            socio-economic status of millions in the country.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<MdExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How can you help us?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            You can help us in many ways by: -\r\n-Promote on social
            media\r\n-Donation drive\r\n-Tell your friends\r\n-Take part in Good
            Deeds Day
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Grid>
    </>
  );
}
