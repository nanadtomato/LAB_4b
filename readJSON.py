import json

# Open the JSON file
with open('books.json') as file:
    data = json.load(file)

book1 = data ['Books'][0]
book2 = data ['Books'][1]

print("Title of the first book: ", book1['title'])
print("Author of the second book: ", book2['author'])
print("Genres of all books")

for index, book in enumerate(data['Books']):
    print(f"Book {index + 1} Genres:", ", ".join(book['genres']))

