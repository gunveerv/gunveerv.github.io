import { Typography, Link } from '@mui/material';
import Box from '@mui/material/Box';
import '../App.css';
import lambdaImg from '../static/lambda.png';
import wavModelBreakdown from '../static/wav_model_breakdown.png';
import wavModelNN from '../static/wav_model_nn.png';
import banffFake from '../static/banff - Gunveer Vilkhu_fake.png';
import banffReal from '../static/banff - Gunveer Vilkhu_real.png';

function AI() {
  const sectionTitleSx = {
    fontWeight: 700,
    fontSize: '1.3rem',
    marginBottom: 2,
    marginTop: 3,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    color: 'white',
    textAlign: 'left',
  };

  const jobTitleSx = {
    fontWeight: 700,
    marginBottom: 0.5,
    fontSize: '1rem',
    color: 'white',
    textAlign: 'left',
  };

  const textSx = {
    color: 'white',
    marginBottom: 0.5,
    textAlign: 'left',
  };

  return (
    <Box>
      <Box sx={{ marginBottom: 4 }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            fontSize: '2.5rem',
            marginBottom: 0.5,
            textAlign: 'left',
          }}
          className="bold"
        >
          Gunveer's AI Portfolio
        </Typography>
      </Box>

      {/* Experience Section */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h2" sx={sectionTitleSx}>
          Professional Experience
        </Typography>

        <Box sx={{ marginBottom: 2.5 }}>
          <Typography variant="h4" sx={jobTitleSx}>
            Software Engineer @ Vertex
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'white',
              marginBottom: 0.8,
              textAlign: 'left',
            }}
          >
            MCP + O Series proof-of-concept (see Vertex's GitHub)
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'white',
              marginBottom: 0.8,
              textAlign: 'left',
            }}
          >
            AIFND Copilot Chatbot (in Production)
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'white',
              textAlign: 'left',
            }}
          >
            Smart Cat Engine (in Production)
          </Typography>
        </Box>
      </Box>

      {/* Projects Section */}
      <Box sx={{ marginBottom: 3 }}>
        <Typography variant="h2" sx={sectionTitleSx}>
          Projects
        </Typography>

        <Box sx={{ marginBottom: 2.5 }}>
          <Typography variant="h4" sx={jobTitleSx}>
            MCP + O Series
          </Typography>
          <Typography variant="h5" sx={textSx}>
            Python, Azure OpenAI, Docker
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'white',
              marginBottom: 0.8,
              textAlign: 'left',
            }}
          >
            Posted on Vertex's Github, this project is a proof of concept for a
            chatbot that can answer questions about the MCP and O Series products.
            It uses Azure OpenAI to generate responses and Docker for deployment.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 2.5 }}>
          <Typography variant="h4" sx={jobTitleSx}>
            Retail Product Classifier
          </Typography>
          <Typography variant="h5" sx={textSx}>
            Python, PyTorch, Transformers
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'white',
              marginBottom: 0.8,
              textAlign: 'left',
            }}
          >
            A demo of cutting-edge ML models; this project guided Smart Cat to an improved model.
            Hosted on Vertex's GitHub.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: 2.5 }}>
          <Typography variant="h4" sx={jobTitleSx}>
            Undergraduate Thesis – λ5780 Diffuse Interstellar Band (DIB)
          </Typography>
          <Typography variant="h5" sx={textSx}>
            Python, PyTorch, Matplotlib
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'white',
              textAlign: 'left',
              marginBottom: 1.5,
            }}
          >
            A sum-of-Gaussians model was trained to fit the λ5780 Diffuse Interstellar
            Band for distant single-cloud stars. This produced a coadded signal shown
            below (in red).
          </Typography>
          <Box sx={{ marginBottom: 1.5 }}>
            <img
              src={lambdaImg}
              alt="Wavelength vs Flux plot"
              className="portfolio-img"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }}
            />
          </Box>
        </Box>

        <Box sx={{ marginBottom: 2.5 }}>
          <Typography variant="h4" sx={jobTitleSx}>
            Binary Classification of .wav Files
          </Typography>
          <Typography variant="h5" sx={textSx}>
            Python, Sci-Kit Learn, TensorFlow, Google Colab
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'white',
              textAlign: 'left',
              marginBottom: 1.5,
            }}
          >
            Breakdown of minor/major chords in .wav files. A neural‑network model
            yielded one of the best fits to the chroma data; see the breakdown below.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 1.5,
              marginBottom: 1.5,
              flexWrap: 'wrap',
            }}
          >
            <Box
              sx={{
                flex: '1 1 45%',
                minWidth: '250px',
              }}
            >
              <img
                src={wavModelNN}
                alt="ROC Curve for Neural Network Model"
                className="portfolio-img"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '4px',
                }}
              />
            </Box>
            <Box
              sx={{
                flex: '1 1 45%',
                minWidth: '250px',
              }}
            >
              <img
                src={wavModelBreakdown}
                alt="Chroma Feature Averages"
                className="portfolio-img"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '4px',
                }}
              />
            </Box>
          </Box>
        </Box>

        <Box sx={{ marginBottom: 2.5 }}>
          <Typography variant="h4" sx={jobTitleSx}>
            CycleGAN Image Translator
          </Typography>
          <Typography variant="h5" sx={textSx}>
            Python, PyTorch, Google Colab
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'white',
              marginBottom: 1.5,
              textAlign: 'left',
            }}
          >
            A transformer that applies different painting styles to photos. See
            my personal submission below, where I translated a photo of Banff
            into a painting‑style image. Many other students submitted their
            photos, which we showcased
            {' '}
            <Link
              href="https://drive.google.com/drive/folders/1OuUnDSkICZeX1Vq7bqT1zkT5C8JnFEjO?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: 'white',
                textDecoration: 'underline',
                '&:hover': {
                  opacity: 0.8,
                },
              }}
            >
              here
            </Link>
            .
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 1.5,
              marginBottom: 1.5,
              flexWrap: 'wrap',
            }}
          >
            <Box
              sx={{
                flex: '1 1 45%',
                minWidth: '250px',
              }}
            >
              <img
                src={banffReal}
                alt="Original Banff landscape"
                className="portfolio-img"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '4px',
                  marginBottom: '8px',
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: 'white',
                  fontSize: '0.85rem',
                }}
              >
                Original
              </Typography>
            </Box>
            <Box
              sx={{
                flex: '1 1 45%',
                minWidth: '250px',
              }}
            >
              <img
                src={banffFake}
                alt="CycleGAN translated landscape"
                className="portfolio-img"
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '4px',
                  marginBottom: '8px',
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: 'white',
                  fontSize: '0.85rem',
                }}
              >
                Translated
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default AI;
