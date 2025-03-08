import SwaggerParser from "@apidevtools/swagger-parser";
import type { OpenAPI } from "openapi-types";

let schema: OpenAPI.Document | undefined;

export const getSchema = async () => {
	if (!schema) {
		const response = await fetch(
			"https://gh-code.developers.cloudflare.com/cloudflare/api-schemas/f6c9d752f31f2e9dea3a9659fefab1b97b6042e9/openapi.json",
		);
		const obj = await response.json();

		schema = await SwaggerParser.dereference(obj);
	}

	return schema;
};
