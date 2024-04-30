import {
  registerForEvent
} from "./chunk-KA26RWFT.mjs";
import {
  errorHandler
} from "./chunk-KE4GSKTO.mjs";
import {
  CheckIn
} from "./chunk-LQ2YP5EH.mjs";
import {
  createEvent
} from "./chunk-TH6IFAXY.mjs";
import "./chunk-U5RXYY2H.mjs";
import {
  getAttendeeBadge
} from "./chunk-WXFFKA6U.mjs";
import {
  getEventAttendees
} from "./chunk-TPEV6L3Y.mjs";
import {
  getEvent
} from "./chunk-KROXYIUY.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
import fastifyCors from "@fastify/cors";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(CheckIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => console.log("HTTP Server running"));
