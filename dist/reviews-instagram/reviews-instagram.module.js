"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsInstagramModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const s3_service_1 = require("../s3.service");
const admin_reviews_instagram_controller_1 = require("./admin-reviews-instagram.controller");
const reviews_instagram_controller_1 = require("./reviews-instagram.controller");
const reviews_instagram_service_1 = require("./reviews-instagram.service");
let ReviewsInstagramModule = class ReviewsInstagramModule {
};
exports.ReviewsInstagramModule = ReviewsInstagramModule;
exports.ReviewsInstagramModule = ReviewsInstagramModule = __decorate([
    (0, common_1.Module)({
        providers: [reviews_instagram_service_1.ReviewsInstagramService, prisma_service_1.PrismaService, s3_service_1.S3Service],
        controllers: [reviews_instagram_controller_1.ReviewsInstagramController, admin_reviews_instagram_controller_1.AdminReviewsInstagramController],
    })
], ReviewsInstagramModule);
//# sourceMappingURL=reviews-instagram.module.js.map