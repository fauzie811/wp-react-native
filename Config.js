const textColor = 'rgba(0,0,0,0.87)'
const baseStyle = {
  marginHorizontal: 16,
  marginBottom: 16,
  color: textColor
}
const headingStyle = {
  ...baseStyle,
  fontFamily: 'roboto-slab-regular',
  fontWeight: 'normal'
}
const htmlStyles = {
  h1: {
    ...headingStyle,
    fontSize: 24
  },
  h2: { ...headingStyle, fontSize: 22 },
  h3: { ...headingStyle, fontSize: 20 },
  h4: { ...headingStyle, fontSize: 18 },
  h5: { ...headingStyle, fontSize: 16 },
  h6: { ...headingStyle, fontSize: 14 },
  p: {
    ...baseStyle,
    lineHeight: 20
  },
  blockquote: {
    ...baseStyle,
    color: 'rgba(0,0,0,0.54)',
    backgroundColor: '#f2f2f2',
    fontFamily: 'droid-serif-italic',
    fontStyle: 'italic',
    padding: 16
  },
  ul: {
    paddingLeft: 16
  },
  ol: {
    paddingLeft: 16
  }
}

const sanitizeOptions = {
  allowedTags: [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'p', 'a', 'ul', 'ol',
    'nl', 'li', 'b', 'i', 'strong', 'em', 'strike', 'code', 'hr', 'br',
    'pre', 'img' ],
  allowedAttributes: {
    a: [ 'href' ],
    img: [ 'src' ]
  }
}

export default {
  apiUrl: 'https://demo.wp-api.org/wp-json/wp/v2',
  showAuthors: true,

  colorPrimary: '#34495e',
  background: '#eee',
  htmlStyles,
  sanitizeOptions,

  // https://developer.wordpress.org/rest-api/reference/posts/#arguments
  sliderParams: {
    per_page: 6,
    tags: '27'
  },

  aboutPageId: 2
}
