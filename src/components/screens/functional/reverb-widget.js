import React from 'react'
function createMarkup(){
	return {__html: '<div id = "shows" class="widget_iframe" style="display:inline-block;width:100%;height:550px;margin:0;padding:0;border:0;"><iframe class="widget_iframe" src="http://www.reverbnation.com/widget_code/html_widget/artist_1611452?widget_id=52&amp;posted_by=artist_1611452&pwc[design]=default&pwc[background_color]=%23333333&pwc[layout]=detailed&pwc[show_map]=0%2C1&pwc[size]=fit" width="100%" height="100%" frameborder="0" scrolling="no"></iframe><div class="footer_branding" style="margin-top:-5px;font-size:10px;font-family:Arial;"><center><a href="http://www.reverbnation.com/band-promotion/how-to-sell-music-on-itunes?utm_campaign=a_features_distribution&utm_medium=widget&utm_source=HTML5_Show_Schedule&utm_content=widgetfooter_Sell music on itunes at ReverbNation.com" target="_blank" style="text-decoration:none;color:#444;">Sell music on itunes at ReverbNation.com</a></center></div></div>'};
}
export const ReverbWidget=() =>{ 
return(	<div className="post-body">
        <div id="shows" className="widget_iframe" style={{display: 'inline-block', width: '100%', height: 550, margin: 0, padding: 0, border: 0}}><iframe className="widget_iframe" src="http://www.reverbnation.com/widget_code/html_widget/artist_1611452?widget_id=52&posted_by=artist_1611452&pwc[design]=default&pwc[background_color]=%23333333&pwc[layout]=detailed&pwc[show_map]=0%2C1&pwc[size]=fit" width="100%" height="100%" frameBorder={0} scrolling="no" /><p />
        </div>
      </div>);
}