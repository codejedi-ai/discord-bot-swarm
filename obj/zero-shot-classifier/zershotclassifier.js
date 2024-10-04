// from transformers import pipeline
// 
// oracle = pipeline(model="facebook/bart-large-mnli")
// oracle(
//     "I have a problem with my iphone that needs to be resolved asap!!",
//     candidate_labels=["urgent", "not urgent", "phone", "tablet", "computer"],
// )
// # {
// #   'sequence': 'I have a problem with my iphone that needs to be resolved asap!!', 
// #   'labels': ['urgent', 'phone', 'computer', 'not urgent', 'tablet'], 
// #   'scores': [0.504, 0.479, 0.013, 0.003, 0.002]
// # }
// 
// oracle(
//     "{DISCORD_MESSAGE}",
//     candidate_labels=["calendar", "no_calendar"],
// )
// #{
// #  'sequence': 'I have a problem with my iphone that needs to be resolved asap!!', 
// #  'labels': ['english', 'german'], 
// #  'scores': [0.814, 0.186]
// # }
// 
// 
// oracle = pipeline(model="deepset/roberta-base-squad2")
// oracle(question="Where do I live?", context="My name is Wolfgang and I live in Berlin")

const classifier = await pipeline('zero-shot-classification', 'Xenova/mobilebert-uncased-mnli');
const text = 'Last week I upgraded my iOS version and ever since then my phone has been overheating whenever I use your app.';
const labels = [ 'mobile', 'billing', 'website', 'account access' ];
const output = await classifier(text, labels);
// {
//   sequence: 'Last week I upgraded my iOS version and ever since then my phone has been overheating whenever I use your app.',
//   labels: [ 'mobile', 'website', 'billing', 'account access' ],
//   scores: [ 0.5562091040482018, 0.1843621307860853, 0.13942646639336376, 0.12000229877234923 ]
// }