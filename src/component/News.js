import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
                        articles = [
                            {
                                "source": {
                                    "id": "news24",
                                    "name": "News24"
                                },
                                "author": "Heinz Schenk",
                                "title": "Why it's no use for Proteas hero Nortje to chase milestones in a dark age for Test cricket",
                                "description": "Five-wicket hero Anrich Nortje isn't bothered by milestones because he's unsure if he'll ever play enough Tests to reach anything significant.",
                                "url": "https://www.news24.com/sport/cricket/proteas/why-its-no-use-for-proteas-hero-nortje-to-chase-milestones-in-a-dark-age-for-test-cricket-20230302",
                                "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/8456/f942014787c1454aa9e4bd0dc919856c.jpg",
                                "publishedAt": "2023-03-02T06:41:54+00:00",
                                "content": "At SuperSport Park\r\n<ul><li>Five-wicket hero Anrich Nortje isn't bothered by milestones because he's unsure if he'll ever play enough Tests to reach anything significant.</li><li>That's the reality o… [+4046 chars]"
                            },
                            {
                                "source": {
                                    "id": "news-com-au",
                                    "name": "News.com.au"
                                },
                                "author": "James McKern",
                                "title": "‘Diabolical’ scenes as Australia crumble",
                                "description": "Welcome to news.com.au&rsquo;s live coverage of the second day of the third Test from Holkar Cricket Stadium in Indore.",
                                "url": "https://www.news.com.au/sport/cricket/australia-vs-india-third-test-live-india-left-redfaced-over-doctored-pitch/news-story/1561e3b136b50e40ded5b5f7d104343b",
                                "urlToImage": "https://content.api.news/v3/images/bin/5bdd7fd45c84e26fc57f939ea5716d04",
                                "publishedAt": "2023-03-02T05:50:00Z",
                                "content": "Welcome to news.com.au’s live coverage of the second day of the third Test from Holkar Cricket Stadium in Indore.\r\nAustralia hold a commanding position entering the second day after knocking the Indi… [+7455 chars]"
                            },
                            {
                                "source": {
                                    "id": "espn-cric-info",
                                    "name": "ESPN Cric Info"
                                },
                                "author": null,
                                "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
                                "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
                                "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
                                "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
                                "publishedAt": "2020-04-27T11:41:47Z",
                                "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
                            },
                            {
                                "source": {
                                    "id": "espn-cric-info",
                                    "name": "ESPN Cric Info"
                                },
                                "author": null,
                                "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
                                "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
                                "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
                                "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
                                "publishedAt": "2020-03-30T15:26:05Z",
                                "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
                            }
                        ];
                    
    constructor(){
        super();
        console.log("constructor call from, News component");
        this.state = {
               articles: this.articles,
               loading: false   
        }
       }
       
       
    async componentDidMount(){
        console.log("cdn");
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=69c033742dd14890a6b1785ea4f6dc6e";
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({articles: parseData.articles});
    }

    render() {
        console.log("render");
        return (
            <div className='container my-3'>
                <h2>NewsMonkey - Top Headlines</h2>
                <div className='row'>
                {this.state.articles.map((element) => {
                  return  <div className='col-md-4' key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage}
                                                 newsUrl={element.url}/>
                    </div>
                })}
                </div>
            </div>
        )
    }
}

export default News