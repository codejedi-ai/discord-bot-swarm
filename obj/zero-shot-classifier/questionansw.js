// Python
// from transformers import pipeline
// oracle = pipeline(model="deepset/roberta-base-squad2")
// oracle(question="Where do I live?", context="My name is Wolfgang and I live in Berlin")

// // Use a different model for sentiment-analysis
// let pipe = await pipeline('sentiment-analysis', 'Xenova/bert-base-multilingual-uncased-sentiment');

// however it is using the pythobn code from transformers import pipeline

const answerer = await pipeline('question-answering', 'Xenova/distilbert-base-uncased-distilled-squad');
const question = 'Who was Jim Henson?';
const context = 'Jim Henson was a nice puppet.';
const output = await answerer(question, context);
// {
//   answer: "a nice puppet",
//   score: 0.5768911502526741
// }