import { Link } from "react-router-dom";
import { blogs } from "./blogs";
import ArticleCard from "../../components/ArticleCard";

const mediumProfileLink = "https://medium.com/@thecodexhub";

export default function Blogs(): React.ReactElement {
	return (
		<div className="bg-white relative isolate py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blogs and articles</h2>
					<p className="mt-2 text-lg leading-8 text-gray-600">
						I write technical articles on{" "}
						<Link
							className="font-semibold underline underline-offset-4"
							rel="noopener noreferrer"
							target="_blank"
							to={mediumProfileLink}
						>
							Medium
						</Link>
						, focusing on Flutter. These articles are designed to help you not only become a better Flutter developer
						but also enhance your overall development skills.
					</p>
				</div>
				<div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					{blogs.map((blog) => (
						<ArticleCard blog={blog} />
					))}
				</div>
			</div>
		</div>
	);
}
