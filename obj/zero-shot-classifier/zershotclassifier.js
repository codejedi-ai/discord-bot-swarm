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

