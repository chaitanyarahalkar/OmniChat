import requests
import random 

MEME_API = "https://meme-api.com/gimme/{}"

def get_random_meme(prompt):
    """
    Fetches a random meme URL from a predefined list of subreddits.

    This is a dummy function and similar functions can be created and used with the chatbot.

    Args:
        prompt (str): A prompt or keyword to fetch a meme. (Currently not used in the function)

    Returns:
        str: URL of the random meme fetched from the subreddit.
    """
    # This is a dummy function and similar functions can be created and used with the chatbot.
    subreddits = ['dankmemes', 'shitposting', 'ProgrammerHumor', 'memes', '196']
    r = requests.get(MEME_API.format(random.choice(subreddits)))
    if r.ok:
        return r.json()['url']
