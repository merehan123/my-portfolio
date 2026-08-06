import paperAssistant from "../assets/projects/paper-assistant.png";
import sentiment from "../assets/projects/sentiment.png";
import cnn from "../assets/projects/cnn.png";
import mushroom from "../assets/projects/mushroom.png";

const projects = [
  {
    id: 1,
    title: "AI Research Paper Assistant",
    image: paperAssistant,

    description:
      "AI-powered research assistant that summarizes research papers, extracts key contributions, and answers questions using Retrieval-Augmented Generation (RAG) and Qwen 2.5.",

    technologies: [
      "Python",
      "LangChain",
      "FAISS",
      "Ollama",
      "Qwen",
      "Streamlit",
    ],

    github: "https://github.com/merehan123/AI-Research-Paper-Assistant",
  },

  {
    id: 2,
    title: "Sentiment Analysis",
    image: sentiment,

    description:
      "Developed machine learning and deep learning models for Arabic sentiment analysis using TF-IDF, FastText, and LSTM with comprehensive model evaluation.",

    technologies: [
      "Python",
      "TensorFlow",
      "LSTM",
      "NLP",
      "FastText",
    ],

    github: "https://github.com/merehan123/nlp-fake-news-detector-transformers",
  },

  {
    id: 3,
    title: "Image Classification with CNN & VGG16",
    image: cnn,

    description:
      "Built image classification models on the CIFAR-10 dataset using CNNs, data augmentation, and transfer learning with VGG16.",

    technologies: [
      "Python",
      "TensorFlow",
      "CNN",
      "VGG16",
      "Transfer Learning",
    ],

    github: "https://github.com/merehan123/cifar10-cnn-supervised-learning",
  },

  {
    id: 4,
    title: "Mushroom Classification",
    image: mushroom,

    description:
      "Implemented a Naive Bayes classifier from scratch with PCA-based dimensionality reduction to classify edible and poisonous mushrooms.",

    technologies: [
      "Python",
      "Machine Learning",
      "Naive Bayes",
      "PCA",
      "NumPy",
    ],

    github: "https://github.com/merehan123/naive-bayes-pca-feature-selection",
  },
];

export default projects;