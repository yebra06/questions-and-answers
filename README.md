# questions-and-answers
Determine if an answer to a question is deemed correct by other users.

## Dependencies
- Node
- Mongodb
  * Need to create a local db called questions with collection named questions.
  * Then make sure mongodb is running with `sudo mongod`.

## Instructions
- Once in questions-and-answers directory:
```
$ yarn
$ yarn start
```

## Example requests (run sequentially and update id value.).
post http://localhost:3019/questions
request
```
{
	"question": "Fruits?",
	"answers": [
		{"answer": "Orange", "upVotes": "10", "downVotes": "11"},
		{"answer": "Pecan"}
	]
}
```
response
```
{
    "ok": true,
    "question": {
        "_id": "5d1ae501abc35fd2899d0159",
        "question": "Fruits?",
        "answers": [
            {
                "upVotes": 10,
                "downVotes": 11,
                "_id": "5d1ae501abc35fd2899d015b",
                "answer": "Orange",
                "upVotesPercent": 0.47619047619047616,
                "downVotesPercent": 0.5238095238095238,
                "id": "5d1ae501abc35fd2899d015b"
            },
            {
                "upVotes": 0,
                "downVotes": 0,
                "_id": "5d1ae501abc35fd2899d015a",
                "answer": "Pecan",
                "upVotesPercent": 0,
                "downVotesPercent": 0,
                "id": "5d1ae501abc35fd2899d015a"
            }
        ],
        "__v": 0
    }
}
```

get http://localhost:3019/questions
```
{
    "ok": true,
    "questions": [
        {
            "_id": "5d1ae501abc35fd2899d0159",
            "question": "Fruits?",
            "answers": [
                {
                    "upVotes": 10,
                    "downVotes": 11,
                    "_id": "5d1ae501abc35fd2899d015b",
                    "answer": "Orange",
                    "upVotesPercent": 0.47619047619047616,
                    "downVotesPercent": 0.5238095238095238,
                    "id": "5d1ae501abc35fd2899d015b"
                },
                {
                    "upVotes": 0,
                    "downVotes": 0,
                    "_id": "5d1ae501abc35fd2899d015a",
                    "answer": "Pecan",
                    "upVotesPercent": 0,
                    "downVotesPercent": 0,
                    "id": "5d1ae501abc35fd2899d015a"
                }
            ],
            "__v": 0
        }
    ]
}
```
get http://localhost:3019/questions/5d1ae501abc35fd2899d0159
```
{
    "ok": true,
    "question": {
        "_id": "5d1ae501abc35fd2899d0159",
        "question": "Fruits?",
        "answers": [
            {
                "upVotes": 10,
                "downVotes": 11,
                "_id": "5d1ae501abc35fd2899d015b",
                "answer": "Orange",
                "upVotesPercent": 0.47619047619047616,
                "downVotesPercent": 0.5238095238095238,
                "id": "5d1ae501abc35fd2899d015b"
            },
            {
                "upVotes": 0,
                "downVotes": 0,
                "_id": "5d1ae501abc35fd2899d015a",
                "answer": "Pecan",
                "upVotesPercent": 0,
                "downVotesPercent": 0,
                "id": "5d1ae501abc35fd2899d015a"
            }
        ],
        "__v": 0
    }
}
```

put http://localhost:3019/questions/5d1ae501abc35fd2899d0159
request
```
{
	"question": {
	    "_id": "5d1ae501abc35fd2899d0159",
	    "question": "Fruits?",
	    "answers": [
	        {
	            "upVotes": 10,
	            "downVotes": 11,
	            "_id": "5d1ae501abc35fd2899d015b",
	            "answer": "Orange",
	            "upVotesPercent": 0.47619047619047616,
	            "downVotesPercent": 0.5238095238095238,
	            "id": "5d1ae501abc35fd2899d015b"
	        },
	        {
	            "upVotes": 4,
	            "downVotes": 1,
	            "_id": "5d1ae501abc35fd2899d015a",
	            "answer": "Pecan",
	            "upVotesPercent": 0,
	            "downVotesPercent": 0,
	            "id": "5d1ae501abc35fd2899d015a"
	        },
	        {
	        	"answer": "Watermelon"
	        }
	    ],
	    "__v": 0
	}
}
```

get http://localhost:3019/questions/5d1ae501abc35fd2899d0159
```
{
    "ok": true,
    "question": {
        "_id": "5d1ae501abc35fd2899d0159",
        "question": "Fruits?",
        "answers": [
            {
                "upVotes": 10,
                "downVotes": 11,
                "_id": "5d1ae501abc35fd2899d015b",
                "answer": "Orange",
                "upVotesPercent": 0.47619047619047616,
                "downVotesPercent": 0.5238095238095238,
                "id": "5d1ae501abc35fd2899d015b"
            },
            {
                "upVotes": 4,
                "downVotes": 1,
                "_id": "5d1ae501abc35fd2899d015a",
                "answer": "Pecan",
                "upVotesPercent": 0.8,
                "downVotesPercent": 0.2,
                "id": "5d1ae501abc35fd2899d015a"
            },
            {
                "upVotes": 0,
                "downVotes": 0,
                "_id": "5d1ae64dabc35fd2899d015c",
                "answer": "Watermelon",
                "upVotesPercent": 0,
                "downVotesPercent": 0,
                "id": "5d1ae64dabc35fd2899d015c"
            }
        ],
        "__v": 0
    }
}
```