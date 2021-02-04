<template>
	<div>
		<div class="cbvariant cbvariant-3_columns" v-for="(item,index) of productList" :key="index">
			<div class="mobile-product-listing-table" style="display: table; width: 100%;">
				<div class="mobile-product-listing-row" style="display: table-row;">
										<!--[if (mso)|(IE)]><table border="0" cellspacing="0" cellpadding="0" width="600" style="width: 600px;"><tr><![endif]-->
					<!--[if (mso)|(IE)]><td style="width: 186px; vertical-align: top;"><![endif]-->
					<div class="mobile-product-listing-3-cell" style="display: table-cell; width: 186px; vertical-align: top;">
						<table border="0" cellspacing="0" cellpadding="0" width="100%">
							<tbody>
								<tr>
									<td style="padding-top: 15px; padding-bottom: 15px;">
										<table border="0" cellpadding="0" cellspacing="0" width="100%">
											<tbody>
												<tr>
													<td>
														<table border="0" cellpadding="0" cellspacing="0" align="center" style=" margin: 0 auto;">
															<tbody>
																<tr>
																	<td style="border:1px solid #666666;">
																		<table border="0" cellpadding="0" cellspacing="0" width="100%">
																			<tbody>
																				<tr>
																					<td style="padding: 10px 10px 10px 10px;">
																						<table border="0" cellpadding="0" cellspacing="0">
																							<tbody>
																								<tr>
																									<td class="mobile-product-listing-3-image-cell" style="font-size: 0; line-height: 0; text-align: center;"><a target="_blank" href="">
																											<img width="100%" :src="item[0] && item[0].productImg" alt="">
																											<span class="image-placeholder" style="" v-if="list.length == 0">
																												<span class="placeholder-style" style="width: 164px; height: 166px;">
																													<span class="placeholder-inner">

																														<img class="placeholder-img-medium" src="../../assets/imgs/placeholder-img80.png" width="60">

																													</span>

																												</span>
																											</span>
																										</a></td>
																								</tr>
																							</tbody>
																						</table>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr>
													<td style="padding-top: 15px;">
														<table border="0" cellpadding="0" cellspacing="0" width="100%">
															<tbody>
																<tr>
																	<td class="webfont-fallback-1" style="color:#333333;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;line-height:125%;text-align:center;text-decoration:none;"><a class="webfont-fallback-1" target="_blank" style="color:#333333;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;line-height:125%;text-decoration:none;" href="">
																		<span class="webfont-fallback-1" v-if="item[0] && item[0].productName">{{item[0].productName}}</span>
																		<span class="webfont-fallback-1" v-else>Product title</span>
																		</a></td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr>
													<td style="padding-top: 15px;">
														<table border="0" cellpadding="0" cellspacing="0" width="100%">
															<tbody>
																<tr>
																	<td style="text-align:center;"><span class="webfont-fallback-1" style="color:#333333;font-family:Arial, sans-serif;font-size:20px;font-weight:bold;line-height:110%;text-align:center;text-decoration:none;">$0.00</span><span style="color:#333333;font-family:Arial, sans-serif;font-size:20px;font-weight:bold;line-height:110%;"> / </span><span class="webfont-fallback-1" style="color:#999999;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;line-height:106%;text-decoration:line-through;">$0.00</span></td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr>
													<td style="padding-top: 15px;">
														<table border="0" cellpadding="0" cellspacing="0" align="center" style="margin: 0 auto; border-collapse: separate !important;">
															<tbody>
																<tr>
																	<td class="webfont-fallback-1" style="border:2px solid #cc3366;border-radius:0px;color:#cc3366;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding-bottom:7px;padding-left:20px;padding-right:20px;padding-top:7px;text-align:center;">
																		<!--[if (mso)|(IE) ]><table border="0" cellpadding="0" cellspacing="0"><tr><td style="line-height: 17px;text-align: center;"><![endif]-->
																		<!--[if !mso]><!-->
																		<div style="line-height: 17px; text-align: center;">
																			<!--<![endif]--><a class="webfont-fallback-1" target="_blank" style="line-height: 17px;color:#cc3366;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-align:center;text-decoration:none;" href=""><span class="webfont-fallback-1" style="line-height: 17px;">SHOP NOW</span></a>
																			<!--[if !mso]><!-->
																		</div>
																		<!--<![endif]-->
																		<!--[if (mso)|(IE) ]></td></tr></table><![endif]-->
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!--[if (mso)|(IE)]></td><![endif]-->
					<!--[if (mso)|(IE)]><td style="width: 21px; vertical-align: top;"><![endif]-->
					<div class="mobile-product-listing-3-cell mobile-product-listing-3-separator" style="display: table-cell; width: 21px; vertical-align: top;"></div>
					<!--[if (mso)|(IE)]></td><![endif]-->
					<!--[if (mso)|(IE)]><td style="width: 186px; vertical-align: top;"><![endif]-->
					<div class="mobile-product-listing-3-cell" style="display: table-cell; width: 186px; vertical-align: top;">
						<table border="0" cellspacing="0" cellpadding="0" width="100%">
							<tbody>
								<tr>
									<td style="padding-top: 15px; padding-bottom: 15px;">
										<table border="0" cellpadding="0" cellspacing="0" width="100%">
											<tbody>
												<tr>
													<td>
														<table border="0" cellpadding="0" cellspacing="0" align="center" style=" margin: 0 auto;">
															<tbody>
																<tr>
																	<td style="border:1px solid #666666;">
																		<table border="0" cellpadding="0" cellspacing="0" width="100%">
																			<tbody>
																				<tr>
																					<td style="padding: 10px 10px 10px 10px;">
																						<table border="0" cellpadding="0" cellspacing="0">
																							<tbody>
																								<tr>
																									<td class="mobile-product-listing-3-image-cell" style="font-size: 0; line-height: 0; text-align: center;"><a target="_blank" href="">
																											<img width="100%" :src="item[1] && item[1].productImg || defaultImg" alt="">
																											<span class="image-placeholder" style="" v-if="list.length == 0">
																												<span class="placeholder-style" style="width: 164px; height: 166px;">
																													<span class="placeholder-inner">

																														<img class="placeholder-img-medium" src="../../assets/imgs/placeholder-img80.png" width="60">

																													</span>

																												</span>
																											</span>
																										</a></td>
																								</tr>
																							</tbody>
																						</table>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr>
													<td style="padding-top: 15px;">
														<table border="0" cellpadding="0" cellspacing="0" width="100%">
															<tbody>
																<tr>
																	<td class="webfont-fallback-1" style="color:#333333;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;line-height:125%;text-align:center;text-decoration:none;"><a class="webfont-fallback-1" target="_blank" style="color:#333333;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;line-height:125%;text-decoration:none;" href=""><span class="webfont-fallback-1" v-if="item[1] && item[1].productName">{{item[1].productName}}</span>
																		<span class="webfont-fallback-1" v-else>Product title</span></a></td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
										
												<tr>
													<td style="padding-top: 15px;">
														<table border="0" cellpadding="0" cellspacing="0" width="100%">
															<tbody>
																<tr>
																	<td style="text-align:center;"><span class="webfont-fallback-1" style="color:#333333;font-family:Arial, sans-serif;font-size:20px;font-weight:bold;line-height:110%;text-align:center;text-decoration:none;">$0.00</span><span style="color:#333333;font-family:Arial, sans-serif;font-size:20px;font-weight:bold;line-height:110%;"> / </span><span class="webfont-fallback-1" style="color:#999999;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;line-height:106%;text-decoration:line-through;">$0.00</span></td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr>
													<td style="padding-top: 15px;">
														<table border="0" cellpadding="0" cellspacing="0" align="center" style="margin: 0 auto; border-collapse: separate !important;">
															<tbody>
																<tr>
																	<td class="webfont-fallback-1" style="border:2px solid #cc3366;border-radius:0px;color:#cc3366;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding-bottom:7px;padding-left:20px;padding-right:20px;padding-top:7px;text-align:center;">
																		<!--[if (mso)|(IE) ]><table border="0" cellpadding="0" cellspacing="0"><tr><td style="line-height: 17px;text-align: center;"><![endif]-->
																		<!--[if !mso]><!-->
																		<div style="line-height: 17px; text-align: center;">
																			<!--<![endif]--><a class="webfont-fallback-1" target="_blank" style="line-height: 17px;color:#cc3366;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-align:center;text-decoration:none;" href=""><span class="webfont-fallback-1" style="line-height: 17px;">SHOP NOW</span></a>
																			<!--[if !mso]><!-->
																		</div>
																		<!--<![endif]-->
																		<!--[if (mso)|(IE) ]></td></tr></table><![endif]-->
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!--[if (mso)|(IE)]></td><![endif]-->
					<!--[if (mso)|(IE)]><td style="width: 21px; vertical-align: top;"><![endif]-->
					<div class="mobile-product-listing-3-cell mobile-product-listing-3-separator" style="display: table-cell; width: 21px; vertical-align: top;"></div>
					<!--[if (mso)|(IE)]></td><![endif]-->
					<!--[if (mso)|(IE)]><td style="width: 186px; vertical-align: top;"><![endif]-->
					<div class="mobile-product-listing-3-cell" style="display: table-cell; width: 186px; vertical-align: top;">
						<table border="0" cellspacing="0" cellpadding="0" width="100%">
							<tbody>
								<tr>
									<td style="padding-top: 15px; padding-bottom: 15px;">
										<table border="0" cellpadding="0" cellspacing="0" width="100%">
											<tbody>
												<tr>
													<td>
														<table border="0" cellpadding="0" cellspacing="0" align="center" style=" margin: 0 auto;">
															<tbody>
																<tr>
																	<td style="border:1px solid #666666;">
																		<table border="0" cellpadding="0" cellspacing="0" width="100%">
																			<tbody>
																				<tr>
																					<td style="padding: 10px 10px 10px 10px;">
																						<table border="0" cellpadding="0" cellspacing="0">
																							<tbody>
																								<tr>
																									<td class="mobile-product-listing-3-image-cell" style="font-size: 0; line-height: 0; text-align: center;"><a target="_blank" href="">
																											<img :src="item[2] && item[2].productImg|| defaultImg" width="100%" alt="">
																											<span class="image-placeholder" style="" v-if="list.length == 0">
																												<span class="placeholder-style" style="width: 164px; height: 166px;">
																													<span class="placeholder-inner">

																														<img class="placeholder-img-medium" src="../../assets/imgs/placeholder-img80.png" width="60">

																													</span>

																												</span>
																											</span>
																										</a></td>
																								</tr>
																							</tbody>
																						</table>
																					</td>
																				</tr>
																			</tbody>
																		</table>
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr>
													<td style="padding-top: 15px;">
														<table border="0" cellpadding="0" cellspacing="0" width="100%">
															<tbody>
																<tr>
																	<td class="webfont-fallback-1" style="color:#333333;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;line-height:125%;text-align:center;text-decoration:none;"><a class="webfont-fallback-1" target="_blank" style="color:#333333;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;line-height:125%;text-decoration:none;" href=""><span class="webfont-fallback-1" v-if="item[2] && item[2].productName">{{item[0].productName}}</span>
																		<span class="webfont-fallback-1" v-else>Product title</span></a></td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr>
													<td style="padding-top: 15px;">
														<table border="0" cellpadding="0" cellspacing="0" width="100%">
															<tbody>
																<tr>
																	<td style="text-align:center;"><span class="webfont-fallback-1" style="color:#333333;font-family:Arial, sans-serif;font-size:20px;font-weight:bold;line-height:110%;text-align:center;text-decoration:none;">$0.00</span><span style="color:#333333;font-family:Arial, sans-serif;font-size:20px;font-weight:bold;line-height:110%;"> / </span><span class="webfont-fallback-1" style="color:#999999;font-family:Arial, sans-serif;font-size:16px;font-weight:normal;line-height:106%;text-decoration:line-through;">$0.00</span></td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
												<tr>
													<td style="padding-top: 15px;">
														<table border="0" cellpadding="0" cellspacing="0" align="center" style="margin: 0 auto; border-collapse: separate !important;">
															<tbody>
																<tr>
																	<td class="webfont-fallback-1" style="border:2px solid #cc3366;border-radius:0px;color:#cc3366;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;padding-bottom:7px;padding-left:20px;padding-right:20px;padding-top:7px;text-align:center;">
																		<!--[if (mso)|(IE) ]><table border="0" cellpadding="0" cellspacing="0"><tr><td style="line-height: 17px;text-align: center;"><![endif]-->
																		<!--[if !mso]><!-->
																		<div style="line-height: 17px; text-align: center;">
																			<!--<![endif]--><a class="webfont-fallback-1" target="_blank" style="line-height: 17px;color:#cc3366;font-family:Arial, sans-serif;font-size:14px;font-weight:bold;text-align:center;text-decoration:none;" href=""><span class="webfont-fallback-1" style="line-height: 17px;">SHOP NOW</span></a>
																			<!--[if !mso]><!-->
																		</div>
																		<!--<![endif]-->
																		<!--[if (mso)|(IE) ]></td></tr></table><![endif]-->
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
												</tr>
											</tbody>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!--[if (mso)|(IE)]></td><![endif]-->
					<!--[if (mso)|(IE)]></tr></table><![endif]-->
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'colum3view',
	props: {
		list: {
			type: Array,
			default: () => [],
		},
	},
	data () {
		return {
			defaultImg:'../../assets/imgs/placeholder-img80.png'		
		}
	},
	computed: {
		productList() {
			if (this.list.length > 0) {
				console.log(this.group(this.list, 3), 999);
				return this.group(this.list, 3);
			} else {
				return [
					[
						{
							productName: 'for example product info  list',
							productUrl:
								'https://www.berrylook.com/en/Products/short-high-collar-brief-plain-long-sleeve-t-shirt-232100.html',
							productImg:
								'../../assets/imgs/placeholder-img80.png',
							price: '$20.74',
							marketPrice: '$51.85',
						},
						{
							productName: 'for example product info  list',
							productUrl:
								'https://www.berrylook.com/en/Products/short-high-collar-brief-plain-long-sleeve-t-shirt-232100.html',
							productImg:
								'../../assets/imgs/placeholder-img80.png',
							price: '$20.74',
							marketPrice: '$51.85',
						},
						{
							productName: 'for example product info  list',
							productUrl:
								'https://www.berrylook.com/en/Products/short-high-collar-brief-plain-long-sleeve-t-shirt-232100.html',
							productImg:
								'../../assets/imgs/placeholder-img80.png',
							price: '$20.74',
							marketPrice: '$51.85',
						},
					],
				];
			}
		},
	},
	methods: {
		group(array, subGroupLength) {
			let index = 0;
			let newArray = [];
			while (index < array.length) {
				newArray.push(array.slice(index, (index += subGroupLength)));
			}
			return newArray;
		},
	},
};
</script>