import { Link, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import '../App.css';

function AI() {
  return (
    <Box>
      <Typography variant="h1" className="bold">AI Portfolio</Typography>
      <Grid
        container
        direction="column"
        spacing={2}
        alignItems="left"
        justifyContent="center"
      >
        <Grid item xs={0} className="grid">
          <Typography variant="h2">AI at Vertex</Typography>
          <br />
          <Typography variant="h4">MCP + O Series Proof of Concept</Typography>
          <Typography variant="h5">Lead a team of interns to build a POC use case for an MCP Server with O Series.</Typography>
          <Typography variant="h5">Presented to Internal Stakeholders. Using MCP, LLM, Python.</Typography>
          <Typography variant="h5">Currently on Vertex's Github</Typography>
          <br />
          <Typography variant="h4">AIFND Copilot</Typography>
          <Typography variant="h5">Assisted with the implementation of Copilot.</Typography>
          <Typography variant="h5">Created unit tests and a CSRF token endpoint. Using Python</Typography>
          <br />
          <Typography variant="h4">Smart Cat</Typography>
          <Typography variant="h5">Assisted with the production release of Smart Cat.</Typography>
          <Typography variant="h5">Created utils for the backend classifier engine, Prompt Engineering to  products.</Typography>
          <Typography variant="h5">Testing classic ML Models to be used instead of LLM API calls (eg. BERT, TF-IDF + SVM).</Typography>
          <Typography variant="h5">Using Python.</Typography>
        </Grid>

        <Grid item xs={0} className="grid">
          <Typography variant="h2">Undergraduate Thesis</Typography>
          <Typography variant="h4">λ5780 Diffuse Interstellar Band (DIB)</Typography>
          <Typography variant="h5">Using a Sum of Gaussians Fit, I created a model to capture the λ5780 DIB.</Typography>
          <Typography variant="h5">Looked through other research papers releated to DIB and implemented Signal-to-Noise boost.</Typography>
          <Typography variant="h5">Using Python.</Typography>
          <Typography variant="h5">April 2025</Typography>
        </Grid>

        <Grid item xs={0} className="grid">
          <Link href="https://colab.research.google.com/drive/1PV6QhPwBeNd7P6jfIi8ofRgJ7kOrI1pl?usp=sharing" underline="none">
            <Box className="link-grid">
              <Typography variant="h2">Binary Classification of .wav Audio files</Typography>
              <OpenInNewIcon className="link" fontSize="small" />
            </Box>
            <Typography variant="h4">Difference of various ML Models in the application of Binary Classification for .wav files</Typography>
            <Typography variant="h5">Using Python.</Typography>
            <Typography variant="h5">April 2025</Typography>
          </Link>
        </Grid>

        <Grid item xs={0} className="grid">
          <Link href="https://github.com/gunveerv/WAI-October_Event" underline="none">
            <Box className="link-grid">
              <Typography variant="h2">CycleGAN Image Translator</Typography>
              <OpenInNewIcon className="link" fontSize="small" />
            </Box>
            <Typography variant="h4">Transforms images using the CycleGAN algorithm</Typography>
            <Typography variant="h5">
              Built with PyTorch on Google Colab, for Western AI
            </Typography>
            <Typography variant="h5">Oct 2022</Typography>
          </Link>
        </Grid>

        <Grid item xs={0} className="grid">
          <Typography variant="h2">Western AI (Undergraduate club)</Typography>
          <Typography variant="h4">Led educational workshops on ML Topics (Regression, Classification, Neural Networks)</Typography>
        </Grid>

      </Grid>
    </Box>
  );
}

export default AI;
