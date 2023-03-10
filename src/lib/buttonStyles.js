const styles = {
	"compose": {
		"style": "flex items-center bg-compose rounded-[16px] pl-4 pr-6 py-[0.9rem] mx-2 my-2 border border-compose hover:drop-shadow-compose hover:border-[#ccc]",
		"iconStyle": "black",
		"textStyle": "text-sm  pl-4",
		"tag": "button" ,
	},
	"user": {
		"style": "w-10 h-10 p-1 ml-1 rounded-full hover:bg-gray-300",
		"imgStyle": "w-12 rounded-full",
		"tag": "button"
	},
	"list": {
		"tag": "button"
	},
	"google-links": {
		"linkStyle": "flex flex-col justify-center w-[40px] h-[40px] rounded-full hover:bg-gray-200",
		"imgStyle": "w-5 mx-auto",
		"iconStyle": "black",
		"tag": "link"
	},
	"gmail": {
		"linkStyle": "h-10 pl-2",
		"imgStyle": "h-10",
		"tag": "link"
	},
	"new mail": {
		"style": "w-4 hover:bg-gray-200 ",
		"tag": "button"
	},
	"send": {
		"style": "flex text-sm text-white font-bold hover:bg-blue-500",
		"textStyle": "pr-2 py-2 bg-send border-0 border-r-[1px] border-r-black",
		"tag": "pill"
	},
	"list-header": {
		"style": "hover:bg-gray-200 p-1 rounded-full font-bold text-xs text-gray-500",
		"iconStyle": "sidebar-transform",
		"tag": "button"
	},
	"links": {
		"linkStyle": "w-full flex items-center hover:bg-gray-200 focus-within:bg-link active:bg-link pl-6 py-1 rounded-r-full",
		"iconStyle": "black sidebar-transform",
		"textStyle": "text-sm focus:font-bold pt-1 pl-4",
		"tag": "link"
	},
	"search": {
		"style": "p-2 rounded-full hover:bg-gray-200",
		"tag": "button",
	},
	"mail": {
		"linkStyle": "hover:border-gray-800 hover:shadow-2xl",
		"tag": "link",
	},
	"mail-button": {
		"style": "p-2 mx-[-0.2rem] rounded-full hover:bg-gray-200",
		"iconStyle": "gray sidebar-transform",
		"tag": "button",
	},
	"mail-star-empty": {
		"style": "p-2 mx-[-0.1rem] rounded-full hover:bg-gray-200",
		"iconStyle": "star-empty",
		"tag": "button"
	},
	"mail-star-filled": {
		"style": "p-2 mx-[-0.1rem] rounded-full hover:bg-gray-200",
		"iconStyle": "star-filled",
		"tag": "button"
	},
	"default": {
		"tag": "button"
	}
}

export default styles; 
