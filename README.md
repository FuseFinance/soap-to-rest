The objective of this exercise is to wrap a old SOAP service with a REST API to simplify its integration.

The API should allow querying for two types of information:
- List of countries (maps to SOAP ListOfCountryNamesByName)
- Detailed information about a country using its ISO code (maps to SOAP FullCountryInfo)

The file describing the WebService can be
found at http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL

The evaluation criteria will include, but are not limited to, the following concepts:
- REST semantics
- Simplicity
- Error handling
- Ability to identify areas for improvement
