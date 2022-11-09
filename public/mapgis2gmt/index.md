# Mapgis文件怎么用在GMT绘图


<!--more-->

## 前言
&emsp;&emsp;Mapgis是一款国内优秀的地图软件🌩️，但由于其仍然存在一些不足，而且操作较为复杂，因此我们会选择其他更为便捷的绘图方式，比如GMT。  
&emsp;&emsp;GMT绘图是不能直接读取⚠️Mapgis中的***点、线、面*** 文件，因此要进行一些文件中属性更改、格式转换等操作。

### GDAL
&emsp;&emsp;首先，要保证[GDAL](https://gdal.org/)软件已经正确安装，可以通过命令行检查自己是否已经安装GDAL成功。  
`WIN+R`调出 运行，输入`CMD` 点击确定，后在命令框中输入 `gdal_translate`

如果正确安装会出现以下内容，显示出一些GDAL的一些使用命令：
~~~
C:\Users\XXXX>gdal_translate
Usage: gdal_translate [--help-general] [--long-usage]
       [-ot {Byte/Int16/UInt16/UInt32/Int32/UInt64/Int64/Float32/Float64/
             CInt16/CInt32/CFloat32/CFloat64}] [-strict]
       [-if format]* [-of format]
       [-b band] [-mask band] [-expand {gray|rgb|rgba}]
       [-outsize xsize[%]|0 ysize[%]|0] [-tr xres yres]
       [-r {nearest,bilinear,cubic,cubicspline,lanczos,average,mode}]
       [-unscale] [-scale[_bn] [src_min src_max [dst_min dst_max]]]* [-exponent[_bn] exp_val]*
       [-srcwin xoff yoff xsize ysize] [-epo] [-eco]
       [-projwin ulx uly lrx lry] [-projwin_srs srs_def]
       [-a_srs srs_def] [-a_coord_epoch epoch]
       [-a_ullr ulx uly lrx lry] [-a_nodata value]
       [-a_scale value] [-a_offset value]
       [-nogcp] [-gcp pixel line easting northing [elevation]]*
       |-colorinterp{_bn} {red|green|blue|alpha|gray|undefined}]
       |-colorinterp {red|green|blue|alpha|gray|undefined},...]
       [-mo "META-TAG=VALUE"]* [-q] [-sds]
       [-co "NAME=VALUE"]* [-stats] [-norat] [-noxmp]
       [-oo NAME=VALUE]*
       src_dataset dst_dataset
~~~
输入 gdal_translate --formats ，可以看到gdal支持的格式:
~~~
C:\Users\XXXX>gdal_translate --formats
Supported Formats:
  VRT -raster,multidimensional raster- (rw+v): Virtual Raster
  DERIVED -raster- (ro): Derived datasets using VRT pixel functions
  GTiff -raster- (rw+vs): GeoTIFF
  COG -raster- (wv): Cloud optimized GeoTIFF generator
  NITF -raster- (rw+vs): National Imagery Transmission Format
  RPFTOC -raster- (rovs): Raster Product Format TOC format
  ECRGTOC -raster- (rovs): ECRG TOC format
  HFA -raster- (rw+v): Erdas Imagine Images (.img)
  SAR_CEOS -raster- (rov): CEOS SAR Image
  CEOS -raster- (rov): CEOS Image
  JAXAPALSAR -raster- (rov): JAXA PALSAR Product Reader (Level 1.1/1.5)
  GFF -raster- (rov): Ground-based SAR Applications Testbed File Format (.gff)
  ELAS -raster- (rw+v): ELAS
  ESRIC -raster- (rov): Esri Compact Cache
  AIG -raster- (rov): Arc/Info Binary Grid
  AAIGrid -raster- (rwv): Arc/Info ASCII Grid
  GRASSASCIIGrid -raster- (rov): GRASS ASCII Grid
  ISG -raster- (rov): International Service for the Geoid
  SDTS -raster- (rov): SDTS Raster
  DTED -raster- (rwv): DTED Elevation Raster
  PNG -raster- (rwv): Portable Network Graphics
  JPEG -raster- (rwv): JPEG JFIF
  MEM -raster,multidimensional raster- (rw+): In Memory Raster
  JDEM -raster- (rov): Japanese DEM (.mem)
  GIF -raster- (rwv): Graphics Interchange Format (.gif)
  BIGGIF -raster- (rov): Graphics Interchange Format (.gif)
  ESAT -raster- (rov): Envisat Image Format
  BSB -raster- (rov): Maptech BSB Nautical Charts
  XPM -raster- (rwv): X11 PixMap Format
  BMP -raster- (rw+v): MS Windows Device Independent Bitmap
  DIMAP -raster- (rovs): SPOT DIMAP
  AirSAR -raster- (rov): AirSAR Polarimetric Image
  RS2 -raster- (rovs): RadarSat 2 XML Product
  SAFE -raster- (rov): Sentinel-1 SAR SAFE Product
  PCIDSK -raster,vector- (rw+v): PCIDSK Database File
  PCRaster -raster- (rw+): PCRaster Raster File
  ILWIS -raster- (rw+v): ILWIS Raster Map
  SGI -raster- (rw+v): SGI Image File Format 1.0
  SRTMHGT -raster- (rwv): SRTMHGT File Format
  Leveller -raster- (rw+v): Leveller heightfield
  Terragen -raster- (rw+v): Terragen heightfield
  netCDF -raster,multidimensional raster,vector- (rw+s): Network Common Data Format
  HDF4 -raster,multidimensional raster- (ros): Hierarchical Data Format Release 4
  HDF4Image -raster- (rw+): HDF4 Dataset
  ISIS3 -raster- (rw+v): USGS Astrogeology ISIS cube (Version 3)
  ISIS2 -raster- (rw+v): USGS Astrogeology ISIS cube (Version 2)
  PDS -raster- (rov): NASA Planetary Data System
  PDS4 -raster,vector- (rw+vs): NASA Planetary Data System 4
  VICAR -raster,vector- (rw+v): MIPL VICAR file
  TIL -raster- (rov): EarthWatch .TIL
  ERS -raster- (rw+v): ERMapper .ers Labelled
  ECW -raster- (rw): ERDAS Compressed Wavelets (SDK 3.x)
  JP2ECW -raster,vector- (rw+v): ERDAS JPEG2000 (SDK 3.x)
  JP2OpenJPEG -raster,vector- (rwv): JPEG-2000 driver based on OpenJPEG library
  L1B -raster- (rovs): NOAA Polar Orbiter Level 1b Data Set
  FIT -raster- (rwv): FIT Image
  GRIB -raster,multidimensional raster- (rwv): GRIdded Binary (.grb, .grb2)
  MrSID -raster- (rov): Multi-resolution Seamless Image Database (MrSID)
  JP2MrSID -raster- (rov): MrSID JPEG2000
  RMF -raster- (rw+v): Raster Matrix Format
  WCS -raster- (rovs): OGC Web Coverage Service
  WMS -raster- (rwvs): OGC Web Map Service
  MSGN -raster- (rov): EUMETSAT Archive native (.nat)
  RST -raster- (rw+v): Idrisi Raster A.1
  GSAG -raster- (rwv): Golden Software ASCII Grid (.grd)
  GSBG -raster- (rw+v): Golden Software Binary Grid (.grd)
  GS7BG -raster- (rw+v): Golden Software 7 Binary Grid (.grd)
  COSAR -raster- (rov): COSAR Annotated Binary Matrix (TerraSAR-X)
  TSX -raster- (rov): TerraSAR-X Product
  COASP -raster- (ro): DRDC COASP SAR Processor Raster
  R -raster- (rwv): R Object Data Store
  MAP -raster- (rov): OziExplorer .MAP
  KMLSUPEROVERLAY -raster- (rwv): Kml Super Overlay
  WEBP -raster- (rwv): WEBP
  PDF -raster,vector- (w+): Geospatial PDF
  Rasterlite -raster- (rwvs): Rasterlite
  MBTiles -raster,vector- (rw+v): MBTiles
  PLMOSAIC -raster- (ro): Planet Labs Mosaics API
  CALS -raster- (rwv): CALS (Type 1)
  WMTS -raster- (rwv): OGC Web Map Tile Service
  SENTINEL2 -raster- (rovs): Sentinel 2
  MRF -raster- (rw+v): Meta Raster Format
  PNM -raster- (rw+v): Portable Pixmap Format (netpbm)
  DOQ1 -raster- (rov): USGS DOQ (Old Style)
  DOQ2 -raster- (rov): USGS DOQ (New Style)
  PAux -raster- (rw+v): PCI .aux Labelled
  MFF -raster- (rw+v): Vexcel MFF Raster
  MFF2 -raster- (rw+): Vexcel MFF2 (HKV) Raster
  GSC -raster- (rov): GSC Geogrid
  FAST -raster- (rov): EOSAT FAST Format
  BT -raster- (rw+v): VTP .bt (Binary Terrain) 1.3 Format
  LAN -raster- (rw+v): Erdas .LAN/.GIS
  CPG -raster- (rov): Convair PolGASP
  NDF -raster- (rov): NLAPS Data Format
  EIR -raster- (rov): Erdas Imagine Raw
  DIPEx -raster- (rov): DIPEx
  LCP -raster- (rwv): FARSITE v.4 Landscape File (.lcp)
  GTX -raster- (rw+v): NOAA Vertical Datum .GTX
  LOSLAS -raster- (rov): NADCON .los/.las Datum Grid Shift
  NTv2 -raster- (rw+vs): NTv2 Datum Grid Shift
  CTable2 -raster- (rw+v): CTable2 Datum Grid Shift
  ACE2 -raster- (rov): ACE2
  SNODAS -raster- (rov): Snow Data Assimilation System
  KRO -raster- (rw+v): KOLOR Raw
  ROI_PAC -raster- (rw+v): ROI_PAC raster
  RRASTER -raster- (rw+v): R Raster
  BYN -raster- (rw+v): Natural Resources Canada's Geoid
  ARG -raster- (rwv): Azavea Raster Grid format
  RIK -raster- (rov): Swedish Grid RIK (.rik)
  USGSDEM -raster- (rwv): USGS Optional ASCII DEM (and CDED)
  GXF -raster- (rov): GeoSoft Grid Exchange Format
  BAG -raster,multidimensional raster,vector- (rw+v): Bathymetry Attributed Grid
  HDF5 -raster,multidimensional raster- (rovs): Hierarchical Data Format Release 5
  HDF5Image -raster- (rov): HDF5 Dataset
  NWT_GRD -raster- (rw+v): Northwood Numeric Grid Format .grd/.tab
  NWT_GRC -raster- (rov): Northwood Classified Grid Format .grc/.tab
  ADRG -raster- (rw+vs): ARC Digitized Raster Graphics
  SRP -raster- (rovs): Standard Raster Product (ASRP/USRP)
  BLX -raster- (rwv): Magellan topo (.blx)
  PostGISRaster -raster- (rws): PostGIS Raster driver
  SAGA -raster- (rw+v): SAGA GIS Binary Grid (.sdat, .sg-grd-z)
  XYZ -raster- (rwv): ASCII Gridded XYZ
  HF2 -raster- (rwv): HF2/HFZ heightfield raster
  OZI -raster- (rov): OziExplorer Image File
  CTG -raster- (rov): USGS LULC Composite Theme Grid
  ZMap -raster- (rwv): ZMap Plus Grid
  NGSGEOID -raster- (rov): NOAA NGS Geoid Height Grids
  IRIS -raster- (rov): IRIS data (.PPI, .CAPPi etc)
  PRF -raster- (rov): Racurs PHOTOMOD PRF
  EEDAI -raster- (ros): Earth Engine Data API Image
  DAAS -raster- (ro): Airbus DS Intelligence Data As A Service driver
  SIGDEM -raster- (rwv): Scaled Integer Gridded DEM .sigdem
  TGA -raster- (rov): TGA/TARGA Image File Format
  OGCAPI -raster,vector- (rov): OGCAPI
  STACTA -raster- (rovs): Spatio-Temporal Asset Catalog Tiled Assets
  STACIT -raster- (rovs): Spatio-Temporal Asset Catalog Items
  GPKG -raster,vector- (rw+vs): GeoPackage
  CAD -raster,vector- (rovs): AutoCAD Driver
  PLSCENES -raster,vector- (ro): Planet Labs Scenes API
  NGW -raster,vector- (rw+s): NextGIS Web
  GenBin -raster- (rov): Generic Binary (.hdr Labelled)
  ENVI -raster- (rw+v): ENVI .hdr Labelled
  EHdr -raster- (rw+v): ESRI .hdr Labelled
  ISCE -raster- (rw+v): ISCE raster
  Zarr -raster,multidimensional raster- (rw+vs): Zarr
  HTTP -raster,vector- (ro): HTTP Fetching Wrapper
~~~
### 几个简单的GDAL命令
通过格式转换，将数据利用利用到GMT绘图。  
tif格式转grd格式
```
gdal_translate.exe -of XXXX.tif ****.grd
```
shp格式转gmt格式
```
ogr2ogr -f "OGR_GMT" XXX.gmt ***.shp

```
## 点、线文件
Mapgis点文件和线文件可以直接利用Mapgis中的`图形处理➡️格式转换`将`XX.wt`和`XX.wl`文件转换为`**.shp`格式。如果对点文件或者线文件中的元素进行分类，可以利用元素的参数或者属性进行归类，具体做可以参照以下对面文件的操作。
|仅断层|添加地质界线|
|---------|-------------------|
|![](https://zanelewes.oss-cn-beijing.aliyuncs.com/img/202211091223311.png)|![](https://zanelewes.oss-cn-beijing.aliyuncs.com/img/202211091223313.png)|

***未完待续......***

-------------------------------------------

> 同时欢迎关注我导的微信公众号***为有源头热水来*** ，里边有更高级的内容值得我好好学习！  
> 如需要转载，请与本文作者联系！
