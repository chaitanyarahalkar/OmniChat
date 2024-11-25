import re

def find_all_index(str, pattern):
    """
    Find all start and end indices of matches for a given pattern in a string.
    
    Args:
    str (str): The input string to search.
    pattern (str): The regex pattern to search for.
    
    Returns:
    list: A list of indices where the pattern matches in the string.
    """
    index_list = [0]
    for match in re.finditer(pattern, str, re.MULTILINE):
        if match.group(1) != None:
            start = match.start(1)
            end = match.end(1)
            index_list += [start, end]
    index_list.append(len(str))
    return index_list

def replace_all(text, pattern, function):
    """
    Replace all occurrences of a pattern in a text using a given function.
    
    Args:
    text (str): The input text to process.
    pattern (str): The regex pattern to search for.
    function (callable): The function to apply to each match.
    
    Returns:
    str: The modified text with replacements.
    """
    poslist = [0]
    strlist = []
    originstr = []
    poslist = find_all_index(text, pattern)
    for i in range(1, len(poslist[:-1]), 2):
        start, end = poslist[i:i+2]
        strlist.append(function(text[start:end]))
    for i in range(0, len(poslist), 2):
        j, k = poslist[i:i+2]
        originstr.append(text[j:k])
    if len(strlist) < len(originstr):
        strlist.append('')
    else:
        originstr.append('')
    new_list = [item for pair in zip(originstr, strlist) for item in pair]
    return ''.join(new_list)

def escapeshape(text):
    """
    Escape text by wrapping the second word in asterisks.
    
    Args:
    text (str): The input text to process.
    
    Returns:
    str: The modified text.
    """
    return '*' + text.split()[1] + '*'

def escapeminus(text):
    """
    Escape text by prefixing it with a backslash.
    
    Args:
    text (str): The input text to process.
    
    Returns:
    str: The modified text.
    """
    return '\\' + text

def escapebackquote(text):
    """
    Escape backquotes in the text.
    
    Args:
    text (str): The input text to process.
    
    Returns:
    str: The modified text.
    """
    return r'\`\`'

def escapeplus(text):
    """
    Escape plus signs in the text.
    
    Args:
    text (str): The input text to process.
    
    Returns:
    str: The modified text.
    """
    return '\\' + text

def escape(text, flag=0):
    """
    Escape special characters in the text for safe processing.
    
    Args:
    text (str): The input text to process.
    flag (int): A flag to indicate additional processing.
    
    Returns:
    str: The modified text with special characters escaped.
    """
    # Temporary replacements to avoid conflicts
    text = re.sub(r"\\\[", '@->@', text)
    text = re.sub(r"\\\]", '@<-@', text)
    text = re.sub(r"\\\(", '@-->@', text)
    text = re.sub(r"\\\)", '@<--@', text)
    if flag:
        text = re.sub(r"\\\\", '@@@', text)
    text = re.sub(r"\\", r"\\\\", text)
    if flag:
        text = re.sub(r"\@{3}", r"\\\\", text)
    
    # Escaping special characters
    text = re.sub(r"_", r'\_', text)
    text = re.sub(r"\*{2}(.*?)\*{2}", r'@@@\\1@@@', text)
    text = re.sub(r"\n{1,2}\*\s", r'\n\n• ', text)
    text = re.sub(r"\*", r'\*', text)
    text = re.sub(r"\@{3}(.*?)\@{3}", r'*\1*', text)
    text = re.sub(r"\!?\[(.*?)\]\((.*?)\)", r'@@@\\1@@@^^^\\2^^^', text)
    text = re.sub(r"\[", r'\[', text)
    text = re.sub(r"\]", r'\]', text)
    text = re.sub(r"\(", r'\(', text)
    text = re.sub(r"\)", r'\)', text)
    text = re.sub(r"\@\-\>\@", r'\[', text)
    text = re.sub(r"\@\<\-\@", r'\]', text)
    text = re.sub(r"\@\-\-\>\@", r'\(', text)
    text = re.sub(r"\@\<\-\-\@", r'\)', text)
    text = re.sub(r"\@{3}(.*?)\@{3}\^{3}(.*?)\^{3}", r'[\1](\2)', text)
    text = re.sub(r"~", r'\~', text)
    text = re.sub(r">", r'\>', text)
    text = replace_all(text, r"(^#+\s.+?$)|```[\D\d\s]+?```", escapeshape)
    text = re.sub(r"#", r'\#', text)
    text = replace_all(text, r"(\+)|\n[\s]*-\s|```[\D\d\s]+?```|`[\D\d\s]*?`", escapeplus)
    text = re.sub(r"\n{1,2}(\s*)-\s", r'\n\n\\1• ', text)
    text = re.sub(r"\n{1,2}(\s*\d{1,2}\.\s)", r'\n\n\\1', text)
    text = replace_all(text, r"(-)|\n[\s]*-\s|```[\D\d\s]+?```|`[\D\d\s]*?`", escapeminus)
    text = re.sub(r"```([\D\d\s]+?)```", r'@@@\\1@@@', text)
    text = replace_all(text, r"(``)", escapebackquote)
    text = re.sub(r"\@{3}([\D\d\s]+?)\@{3}", r'```\1```', text)
    text = re.sub(r"=", r'\=', text)
    text = re.sub(r"\|", r'\|', text)
    text = re.sub(r"{", r'\{', text)
    text = re.sub(r"}", r'\}', text)
    text = re.sub(r"\.", r'\.', text)
    text = re.sub(r"!", r'\!', text)
    
    return text